import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";
import { UserConnectionDataBase } from "../data/UserConnectionDataBase";

export default async function followUser(req: Request, res: Response): Promise<void> {
    try {
        const { userToFollowId } = req.body

        const tokenFollower = req.headers.authorization as string
        

        if (!userToFollowId) {
            throw new Error('Please, enter the user ID you want to follow!')
        }

        const data = new Authenticator().getData(tokenFollower)
       
        const follower = await new UserDataBase().getUserById(data.id)
        const followed = await new UserDataBase().getUserById(userToFollowId)
      

        if (!follower || !followed) {
            throw new Error('User not found!')
        }

        await new UserConnectionDataBase().followUser(followed.id, follower.id)
     
        res.status(201).send({ message: "Followed successfully" })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}