import { Request, Response } from "express";
import { connection } from "../data/connection";
import generateId from "../utilities/idGenerator";

export default async function putStatus(req: Request, res: Response): Promise<void> {
    try {
        let message = "Success"
        let id = req.params.id

        await connection("shopper_order_item")
            .update({
                finished: 1,
            })
            .where("id", id)
        res.status(201).send(message)
    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
    }
}