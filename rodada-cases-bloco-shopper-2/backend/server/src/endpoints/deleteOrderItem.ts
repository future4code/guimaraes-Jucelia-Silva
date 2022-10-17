import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function deleteOrderItem(req: Request, res: Response): Promise<void> {
    try {
        let message = "Product removed from cart"
        let id = req.params.id
        await connection("shopper_order_item")
            .delete()
            .where("id", id)
        res.status(201).send(message)
    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
    }
}