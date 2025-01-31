import { Offer, Prisma, PrismaClient, User } from "@prisma/client";
import { HttpException } from "../exceptions/httpException"
import bcrypt, { compare } from "bcrypt"
import jwt from "jsonwebtoken"

// Alta cohexion y bajo acoplamiento

// Usar un patron singleton

const prisma = new PrismaClient()
const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'

export class RateService {
    static async rate(id: number, value:Number) {
        const findOffer = await prisma.offer.findUnique({ where: { id } })
        return findOffer
    }
    static async getRate(idOffer: number) {
        const rate = await prisma.rate.findMany({ where: { idOffer} })
        return rate
    }
}