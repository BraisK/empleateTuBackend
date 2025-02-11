import { HttpException } from "../exceptions/httpException"
import { prisma } from "../database/database"
// Alta cohexion y bajo acoplamiento

// Usar un patron singleton

const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'

export class RateService {
    static async rate(idOffer: number, idUser: number, value: number): Promise<void> {
        // Validar que el rating está dentro del rango permitido
        if (value < 0 || value > 5) {
            throw new Error("Rating must be between 0 and 5.");
        }

        // Verificar si la oferta existe
        const offer = await prisma.offer.findUnique({ where: { id: idOffer } });
        if (!offer) {
            throw new Error("Offer not found.");
        }

        // Actualizar o crear la calificación

        /*
        SELECT  AVG(value) AS averageValue, COUNT(value) AS totalCount
    FROM Rating
    WHERE offerId = <offerId>;
        */
        await prisma.rate.upsert({
            where: { idUser_idOffer: { idUser, idOffer } },
            update: { value },
            create: { idUser, idOffer, value },
        });
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
            select: { value: true }
        })
    }
}