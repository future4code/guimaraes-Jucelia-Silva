import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function putStock(req: Request, res: Response): Promise<void> {
    try {
        let message = "Success"
        const id = req.params.id
        const orderAmount: number = req.body.orderAmount

        const resActualStock =
            await connection("products_shopper")
                .select('qty_stock')
                .where('id', id)
        const actualStock = resActualStock[0].qty_stock
        const newStock = (actualStock - orderAmount)
        await connection("products_shopper")
            .update({
                qty_stock: newStock
            })
            .where("id", id)
        res.status(201).send(message)
    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
    }

}