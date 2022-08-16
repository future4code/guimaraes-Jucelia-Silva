import { CustomError } from "./CustomError";

export class ShortDescription extends CustomError {
    constructor(){
        super("Descrição inválida, precisa ter pelo menos 3 caracteres", 406)
    }
}