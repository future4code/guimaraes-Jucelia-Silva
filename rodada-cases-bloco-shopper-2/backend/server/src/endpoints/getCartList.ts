import { Request, Response } from "express";
import { connection } from "../data/connection";
import { OrderItem } from "../types/types";


export default async function getCartList(req: Request, res: Response) {
    try {
        let message = "Success"
        const result: OrderItem[] =
            await connection('shopper_order_item')
                .select("*")
                .where('finished', 0)
        if (!result) {
            res.statusCode = 404
            message = 'Data not found'
            throw new Error(message)
        }
        const sum = await connection('shopper_order_item')
            .sum('totalPrice')
            .where('finished', 0)
            const total: number = sum[0]["sum(`totalPrice`)"]
        res.status(200).send({ message, result, total })
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }

}