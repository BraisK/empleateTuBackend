import { Category, Offer, Prisma, PrismaClient, User } from "@prisma/client";
import { HttpException } from "../exceptions/httpException"
import bcrypt, { compare } from "bcrypt"
import jwt from "jsonwebtoken"

// Alta cohexion y bajo acoplamiento

// Usar un patron singleton

const prisma = new PrismaClient()
const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'

export class CategoryService {
    static async getById(id: number) {
        const findCategory = await prisma.category.findUnique({ where: { id } })
        if (!findCategory) throw new HttpException(404, 'User not found')
        return findCategory
    }

    static async getAll() {
        const categories = await prisma.category.findMany()
        return categories
    }
    static async save(category: Category) {
        return await prisma.category.create({
            data:{
                name:category.name
            }
        })
    }
}