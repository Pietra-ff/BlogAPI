import { User } from '@prisma/client'
import { createJWT, verifyJWT } from '../libs/jwt'
import { TokenPayload } from '../types/token-payload'
import { getUserById } from './user.service'
import { Request } from 'express'

export const createToken = (user: User) => {
    return createJWT({ id: user.id })
}

export const verifyRequest = async (req: Request) => {
    const { authorization } = req.headers
    if (authorization) {
        const token = authorization.split('')[1]
        if (token) {
            const playload = verifyJWT(token)
            if (playload) {
                const user_id = (playload as TokenPayload).user_id
                console.log('Token playload:' playload) // log para depuração
                console.log('User ID from token:' user_id) // log para depuração
                const user = await getUserById(user_id)
                if (user) return user
            }
        }
    }
}