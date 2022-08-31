import { Request, Response } from 'express'
import { BaseDatabase } from '../data/BaseDatabase'
import { RecipeDataBase } from '../data/RecipeDataBase'
import Authenticator from '../services/Authenticator'
import { UserDataBase } from '../data/UserDataBase'


export default async function editRecipe(req: Request, res: Response): Promise<void> {
    try {
        const recipeId = req.params.id
        const token = new Authenticator().getData(req.headers.authorization as string);
       

        if (token.role !== 'NORMAL') {
            throw new Error("Only normal users can edit the recipe!")
        }
       

        const userData = await new UserDataBase().getUserById(token.id)
       
      
        if (!userData) {
            throw new Error("Make sure you are logged in before edit recipes!")
        }
       

        const recipes = {
            title: req.body.title,
            description: req.body.description
        }
       

        if (!recipeId) {
            throw new Error("Please, enter the id of the recipe you are looking for!")
        }
       

        if (!recipes.title || !recipes.description) {
            throw new Error("Please, fill in the required fields!")
        }

        const recipeData = await new RecipeDataBase().getRecipeById(recipeId)
      
        console.log(recipeData)
        if (!recipeData.creator_user_id !== !userData.id) {
            throw new Error("You can only change your recipes!")
        }
       

        const recipeDB = await new RecipeDataBase().update(recipeId, recipes.title, recipes.description)
       
            res.status(200).send({
                message: "Recipe updated successfully!", recipeDB
            })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}