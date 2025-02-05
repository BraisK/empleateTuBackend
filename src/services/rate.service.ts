import { HttpException } from "../exceptions/httpException"
import { prisma } from "../database/database"
// Alta cohexion y bajo acoplamiento

// Usar un patron singleton

const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'

export class RateService {
    static async rate(idUser: number, idOffer: number, value: number) {
        const findOffer = await prisma.offer.findUnique({ where: { id: idOffer } })
        if (!findOffer) throw new HttpException(404, 'Offer do not exists')
        // TODO poner enun middleware de validacion
        if (value < 0 || value > 5) throw new HttpException(400, 'Rate value must be ')
        await prisma.rate.upsert({
            where: {
                idUser_idOffer: {
                    idUser, idOffer
                }
            },
            update: {
                value
            },
            create: {
                idUser, idOffer, value
            }
        })
    }
    static async getRate(idOffer: number) {
        const findOffer = await prisma.offer.findUnique({ where: { id: idOffer } })
        if (!findOffer) throw new HttpException(404, 'Offer do not exists')

        const ratingStates = await prisma.rate.aggregate({
            where: { idOffer },
            _avg: { value: true },
            _count: { value: true }
        })
        return {
            totalRatings: ratingStates._count.value,
            averateRatings: ratingStates._avg.value?.toFixed(2)
        }
    }
    static async getMyRate(idUser: number, idOffer: number) {
        const findOffer = await prisma.offer.findUnique({ where: { id: idOffer } })
        if (!findOffer) throw new HttpException(404, 'Offer do not exists')

        return await prisma.rate.findUnique({
            where: {
                idUser_idOffer: { idUser, idOffer }
            },
            select:{value:true}
        })
    }
}