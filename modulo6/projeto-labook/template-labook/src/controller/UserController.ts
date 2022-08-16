import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { addFriendDTO } from "../model/user/addFriendDTO";
import { undoFriendshipDTO } from "../model/user/undoFriendshipDTO";
import { userInputDTO } from "../model/user/userInputDTO";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: userInputDTO = { name, email, password };

      await this.userBusiness.createUser(input);

      res.status(201).send({ message: `Usuário ${name} criado!` });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
  
  public getAll = async (req: Request, res: Response) => {
    try {
      const users = await this.userBusiness.getAll();
      res.status(200).send(users);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public addFriend = async (req: Request, res: Response) => {
    try {
      const { friend1_id, friend2_id } = req.body;
      const input: addFriendDTO = { friend1_id, friend2_id };
      await this.userBusiness.addFriend(input);
      res.status(200).send({ message: "Você adicionou nova(s) amizade(s)" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public checkFriends = async (req: Request, res: Response) => {
    try {
      const friends = await this.userBusiness.checkFriends();
      res.status(200).send(friends);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public undoFriendship = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const input: undoFriendshipDTO = { id };
      await this.userBusiness.undoFriendship(input);
      res.status(200).send({ message: "Amizade encerrada." });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}