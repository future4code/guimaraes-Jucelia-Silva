import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManger";


export default async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;

   
        if (!email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }
        
        if (!password) {
            throw new Error("Please, check the fiels!");
        }
        
        const userData = {
            email,
            password
        };

        const user = await new UserDataBase().getUserByEmail(userData.email);
       
        
        const hashManager: HashManager = new HashManager()

        const compareResult = hashManager.compareHash(
            userData.password,
            user?.password
        );
       

        if (!user || !compareResult) {
            throw new Error("Invalid credentials!");
        }
        

        const newAuthenticator = new Authenticator()
        const token = newAuthenticator.generateToken({
            id: user.id,
            role: user.role
        })

   
        res.status(200).send({ token });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
};