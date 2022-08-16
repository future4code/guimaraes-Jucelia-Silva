import { Request, Response } from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { createUserDTO } from "../../model/createUserDTO";

export class UserController {

  async getAllController(req: Request, res: Response):Promise<void>  {
    try {
      const users = await new UserBusiness().userGetAll()
      res.send(users)

    } catch (error: any) {
      res.send({ message: error.message }).status(error.status);
    }
  }

  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const input:createUserDTO = {
        name,
        email,
        password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário adicionado com sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

}