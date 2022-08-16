import { v4 as generateId } from 'uuid'
import { UserDatabase } from "../data/UserDatabase"
import { User } from "../types/User"
import { createUserDTO } from "../model/createUserDTO"
import { InvalidRequest } from "../error/InvalidRequest"
import { InvalidEmail } from "../error/InvalidEmail"

export class UserBusiness {

 async userGetAll(): Promise<User[]> {
  return await new UserDatabase().getAll()
 }
  async create(input: createUserDTO):Promise<void> {
    const {email, name, password} = input;

    if (!email || !name || !password) {
     throw new InvalidRequest()
    }

    if(!email.includes("@")){
      throw new InvalidEmail()
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }
}