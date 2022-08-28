import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import { HashManager } from "../services/HashManger";
import { user } from "../model/user";
import { UserDataBase } from "../data/UserDataBase";

export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password, role } = req.body

        if (!name || !email || !password || !role) {
            throw new Error("Credentials not provided!");
        }
        

        const userData: user = {
            id: '',
            name,
            email,
            password,
            role: req.body.role || 'NORMAL'
        }
        

        userData.id = generateId()
     

        userData.password = new HashManager().createHash(userData.password)
    

        await new UserDataBase().createUser(userData)
      

        const token = new Authenticator().generateToken({
            id: userData.id,
            role: userData.role
        });
      
        res.status(201).send({ message: "User created successfully!", token })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}