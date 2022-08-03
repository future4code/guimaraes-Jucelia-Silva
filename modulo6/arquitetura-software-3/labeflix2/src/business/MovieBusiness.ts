import {v4 as generateId} from "uuid";
import { MovieDatabase } from "../data/MovieDatabase";
import { createMovieDTO } from "../model/createMovieDTO";
import { InvalidRequest } from "../error/InvalidRequest";
import  {ShortDescription}  from "../error/ShortDescription";


export class MovieBusiness {
    public create = async(input: createMovieDTO): Promise<void> => {
        const {title, description, duration_in_minutes, year_of_release} = input;
        if(
            !title|| 
            !description ||
            !duration_in_minutes ||
            !year_of_release) 
            {
            throw new InvalidRequest()
        }
        if(description.length < 16) {
            throw new ShortDescription()
        }
        const id = generateId()

        const movieDatabase = new MovieDatabase()
        await movieDatabase.createMovieDatabase({ 
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
    }
}
