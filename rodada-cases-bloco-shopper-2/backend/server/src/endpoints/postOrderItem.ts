import { Request, Response } from "express";
import { connection } from "../data/connection";
import generateId from "../utilities/idGenerator";

export default async function postOrderItem(req: Request, res: Response): Promise<any> {
    try {
        let message = "Product added to cart"
        const { prodName, prodId, prodPrice, amount } = req.body
        const totalPrice = (prodPrice * amount)
        const id: string = generateId()
        await connection('shopper_order_item')
            .insert({
                id, prodName, amount, prodId, prodPrice, totalPrice
            })
        res.status(201).send(message)
    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
    }
}