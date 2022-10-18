import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types/types";

export default async function getAllProducts(req: Request, res: Response): Promise<void> {
    try {
        let message = "Success"
        let page = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1;
        }
        let size = 10;
        let offset = size * (page - 1)
        const result: Product[] =
            await connection('products_shopper')
                .select('*')
                .limit(size)
                .offset(offset)
        if (!result) {
            res.statusCode = 404
            message = 'Data not found'
            throw new Error(message)
        }
        res.status(200).send({ message, page, result })
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}