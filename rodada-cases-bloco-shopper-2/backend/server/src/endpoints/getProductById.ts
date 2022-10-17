import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getProductById(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id
        const result =
            await connection('products_shopper')
                .select('*')
                .where({id})
        if (!result) {
            res.statusCode = 404
            let message = 'Data not found'
            throw new Error(message)
        }
        res.status(200).send(result)
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}