import { userInputDTO } from "../model/user/userInputDTO";
import { addFriendDTO } from "../model/user/addFriendDTO";
import { generateId } from "../services/generateId";
import { user } from "../types/user";
import { UserRepository } from "../repository/UserRepository";
import { friendRelation } from "../types/friendRelation";
import { undoFriendshipDTO } from "../model/user/undoFriendshipDTO";

export class UserBusiness {
  constructor(private userDatabase: UserRepository) { }

  public createUser = async (input: userInputDTO): Promise<void> => {
    try {
      const { name, email, password } = input;
      const id: string = generateId();
      const user: user = { id, name, email, password };
      await this.userDatabase.createUser(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public getAll = async (): Promise<user[]> => {
    const result = await this.userDatabase.getAllUsers();
    return result;
  }

  public addFriend = async (input: addFriendDTO): Promise<void> => {
    try {
      const { friend1_id, friend2_id } = input;
      const id: string = generateId();
      const newFriends: friendRelation = { id, friend1_id, friend2_id };
      await this.userDatabase.addFriend(newFriends);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public checkFriends = async (): Promise<friendRelation[]> => {
    try {
      const result = await this.userDatabase.checkFriends();
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public undoFriendship = async (input: undoFriendshipDTO): Promise<void> => {
    try {
      const { id } = input;
      await this.userDatabase.undoFriendship(id);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

