import { Request, Response } from 'express'
import { RecipeDataBase } from '../data/RecipeDataBase'
import Authenticator from '../services/Authenticator'
import { UserDataBase } from '../data/UserDataBase'
import { UserConnectionDataBase } from '../data/UserConnectionDataBase'

export default async function deleteUser(req: Request, res: Response): Promise<void> {
    try {
        const deleteUserId = req.params.id
        const token = new Authenticator().getData(req.headers.authorization as string);

        const userData = await new UserDataBase().getUserById(token.id)

        if (!userData || userData.role !== 'ADMIN') {
            throw new Error("Invalid credentials!")
        }

        if (!deleteUserId) {
            throw new Error("Please, enter a valid user id!")
        }

        await new RecipeDataBase().deleteRecipeCreator(deleteUserId)

        await new UserConnectionDataBase().delete(deleteUserId)
        
        await new UserDataBase().deleteUser(deleteUserId)
       

        res.status(200).send({
            message: "User successfully deleted!"
          })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}