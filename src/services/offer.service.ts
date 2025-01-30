import { Offer, Prisma, PrismaClient, User } from "@prisma/client";
import { HttpException } from "../exceptions/httpException"
import bcrypt, { compare } from "bcrypt"
import jwt from "jsonwebtoken"

// Alta cohexion y bajo acoplamiento

// Usar un patron singleton

const prisma = new PrismaClient()
const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'

export class OfferService {
    static async getById(id: number) {
        const findOffer = await prisma.offer.findUnique({ where: { id } })
        if (!findOffer) throw new HttpException(404, 'User not found')
        return findOffer
    }

    static async getAll() {
        const offerts = await prisma.offer.findMany()
        return offerts
    }
    static async save(offer: Offer) {
        return await prisma.offer.create({
            data: {
                ...offer
            }
        })
    }
    static async delete(id: number) {
        return await prisma.offer.delete( {
            where: {id}
        }
        )
    }
    static async update(id:number, change:Offer ) {
        return await prisma.offer.update( {
            where:{id},
            data:change
        }
        )
    }
}