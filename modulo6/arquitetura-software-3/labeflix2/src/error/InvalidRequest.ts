import { CustomError } from "./CustomError";

export class InvalidRequest extends CustomError {
    constructor(){
        super("Requisição inválida!", 400)
    }
}