import {Router} from "express";
import { MovieBusiness } from "../../business/MovieBusiness";
import { MovieController } from "./MovieController";

export const movieRouter = Router()

const movieController = new MovieController()

movieRouter.post("/create", movieController.createController)