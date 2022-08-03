import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError {
    constructor(){
        super("email inválido", 400)
    }
}