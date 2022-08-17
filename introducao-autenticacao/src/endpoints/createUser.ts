import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import Authenticator from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import { authenticationData } from "../types";
import generateToken from "../services/Authenticator"
import { createUserTable } from "../data/createUser";




export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
      // Item b. Validação do email
       if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email");
       }
  
      // Item c. Validação da senha
       if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
       }
  
       const userData = {
         email: req.body.email,
         password: req.body.password,
       };
  
       const id = generateId();
  
    
       await createUserTable(id, userData.email, userData.password);

  
       const token =  new Authenticator().generateToken({
         id,
       });
  
       res.status(200).send({ message: "User created successfull!!!",
         token });
     } catch (err: any) {
        console.log(err)
       res.status(400).send({ 
         message: err.message,
       });
     }
}