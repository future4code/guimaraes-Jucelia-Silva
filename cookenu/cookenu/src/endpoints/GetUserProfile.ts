import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";


export default async function getOwnProfile(req: Request, res: Response): Promise<void> {
    try {
        const token = new Authenticator().getData(req.headers.authorization as string);
        
        const userData = await new UserDataBase().getProfile(token.id)
       

        res.status(200).send({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            role: userData.role
        });
      
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}