import { RequestHandler } from "express"
import * as mainController from '../controllers/main.controller'

export const getAllPosts: RequestHandler = async (req, res) => {
    return res.json({ message: 'Obtendo todos os posts...' })
}

export const getPost: RequestHandler = async (req, res) => {
    return res.json({ message: 'Obtendo o post com slug: ${req.params.slug}' })
}

export const getRelatedPosts: RequestHandler = async (req, res) => {
    return res.json({ message: 'Obtendo posts relacionados ao post com slug: ${req.params.slug}' })
}