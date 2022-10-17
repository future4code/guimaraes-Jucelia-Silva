import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function putItemAmount(req: Request, res: Response): Promise<void> {
    try {
        let message = "Success"
        let {amount, totalPrice} = req.body
        let id = req.params.id

        await connection("shopper_order_item")
            .update({
                amount: amount,
                totalPrice: totalPrice
            })
            .where("id", id)
        res.status(201).send(message)


    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
    }
}