import { Request, Response } from 'express'
import { RecipeDataBase } from '../data/RecipeDataBase'
import Authenticator from '../services/Authenticator'
import { UserDataBase } from '../data/UserDataBase'

export default async function deleteRecipe(req: Request, res: Response): Promise<void> {
    try {
        const recipeId = req.params.id
        const token = new Authenticator().getData(req.headers.authorization as string);

        const userData = await new UserDataBase().getUserById(token.id)
        if (!userData) {
            throw new Error("Make sure you are logged in!")
        }
       
        if (!recipeId) {
            throw new Error("Enter the id of the recipe you are looking for!")
        }
     
        const recipeDataBase = new RecipeDataBase()
        const recipeData = await new RecipeDataBase().getRecipeById(recipeId)
        
        if (recipeData.creator_user_id !== userData.id) {
            throw new Error("You can only delete your own recipes!")
        }
       

        await recipeDataBase.deleteRecipeById(recipeId)
         

        res.status(200).send({
            message: "Recipe deleted successfully!"
        })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}