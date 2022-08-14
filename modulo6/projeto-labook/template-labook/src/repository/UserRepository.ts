import { friendRelation } from "../types/friendRelation";
import { user } from "../types/user";

export interface UserRepository {
  createUser(user: user): Promise<void>;
  getAllUsers(): Promise<user[]>;
  addFriend(friend: friendRelation): Promise<void>;
  checkFriends(): Promise<friendRelation[]>;
  undoFriendship(id: string): Promise<void>;
}