import { Offer, Prisma, PrismaClient, User } from "@prisma/client";
import { HttpException } from "../exceptions/httpException"
import bcrypt, { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { prisma } from "../database/database"

// Alta cohexion y bajo acoplamiento

// Usar un patron singleton

const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'

export class OfferService {
    static async getById(id: number) {
        const findOffer = await prisma.offer.findUnique({ where: { id } })
        if (!findOffer) throw new HttpException(404, 'Offer not found')
        return findOffer
    }

    // localhost:3000/api/offer/?title=dam
    static async getAll(title: string = '') {
        /*  return await prisma.offer.findMany({
             where: title ? {
                 title: {
                     contains: title
                 }
             } : {},
             orderBy: {
                 createdAt: 'desc'
             },
             take: 100
         }) */

        return await prisma.offer.findMany({
            where: {
                ...(title && {
                    title: {
                        contains: title,
                        //mode: "insensitive" // Búsqueda sin distinción entre mayúsculas y minúsculas
                    }
                })
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 100,
            include: {
                category: {
                    select: {
                        name: true
                    }
                }
            }
        });
    }

    static async create(idUser: number, offer: Offer) {
        return await prisma.offer.create({
            data: {
                ...offer,
                idUserCreator: idUser
            }
        })
    }
    static async delete(id: number) {
        return await prisma.offer.delete({
            where: { id }
        }
        )
    }
    static async update(id: number, change: Offer) {
        const findOffer = prisma.offer.findUnique({ where: { id } })
        if (!findOffer) throw new HttpException(404, 'Offer doesnt exist')
        return await prisma.offer.update({
            where: { id },
            data: {
                ...change
            }
        }
        )
    }
}