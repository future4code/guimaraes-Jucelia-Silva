import { EnumType } from "typescript";

enum GENERO {
        ACAO="ação",
        DRAMA="drama",
        COMEDIA="comédia",
        ROMANCE="romance",
        TERROR="terror"
    }
    
type filme = {
    nome:string,
    anoLancamento: number,
    genero: EnumType,
    pontuacao?:number
}

const filme1 = {
    nome: " Titanic ",
    anoLancamento: 1997,
    genero: GENERO.ROMANCE,
    pontuacao:10
}