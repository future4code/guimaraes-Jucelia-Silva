//a)
//let minhaString: string = 3
//Tipo número não é atribuível como string

//b)
let meuNumero: number | string = 5

//c)
type pessoa = {
    nome: string,
    idade:number,
    corFavorita:string
}

const pessoa1: pessoa = {
    nome: "Luciana",
    idade: 28,
    corFavorita: "Rosa"
}

const pessoa2: pessoa = {
    nome: "Ana",
    idade: 29,
    corFavorita: "Preto"
}

const pessoa3: pessoa = {
    nome: "Paula",
    idade: 30,
    corFavorita: "Verde"
}

//d)
enum cores {
    VERMELHO= "Vermelho",
    LARANJA="Laranja",
    AMARELO="Amarelo",
    VERDE="Verde",
    AZUL="Azul",
    ANIL="Anil",
    VIOLETA="Violeta"
}

const pessoa4: pessoa = {
    nome: "Pamela",
    idade: 30,
    corFavorita: cores.VIOLETA

}

console.log(pessoa4);