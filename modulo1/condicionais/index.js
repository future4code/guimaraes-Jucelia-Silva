//1. Exercício


const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}
// O codigo está pedindo o usuario para digitar um numero e ve se ele passa ou não
// O usuario pode digitar numeros pares
// Os numeros ímpas não passa


//2. Ecercício


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
            // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// O codigo passa o nome de algumas frutas e seus valores
// O o preço da maçã é R$ 5
// O preço da fruta  pêra  é  R$  5


const numero = Number(prompt("Digite o primeiro número."))

if (numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// A premeira linha está pedido um resposta do usuario em número
// passa todos os números menos o numero 0 e números negativos como -10
//Há um erro no console.log ele pede para ler 'mensagem' ela é declarada, mais seu valor não lido

//1. Exercício

const idade = Number(prompt("Digite a sua idade? Só pode dirigir maiores de 18 anos."))
const suaIdade = Number(idade)

if (suaIdade > 18) {
    console.log("Você pode dirigir.")

} else {
    console.log("Você não pode dirigir.")
}


//2. Exrcício

const turnoEstuda = prompt(" Em qual turno você estuda? Digite M (matutino),  V (Vespertino) ou N (Noturno).").toUpperCase();

if (turnoEstuda === 'M') {
    console.log("Bom dia!")

} else if (turnoEstuda === 'V') {
    console.log("Boa tarde!")

} else if (turnoEstuda === 'N') {
    console.log("Boa noite!")

} else {
    console.log("Você não estuda em nenhum dos turnos!")
}


//3. Exercício

let turnoEstuda = prompt("Em qual turno você estuda? Digite 'M' para (matutino), 'V' para (vespetino) ou 'N' para (noturno)").toUpperCase();
let turno
switch (turnoEstuda) {
    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break;
    default:
        console.log("Você não estuda em nenhum dos turnos!")
        break;

}

//4. Exercício

let generoFilme = prompt(`Digite o gênero do filme que vão assistir?`)
let precoIngresso = Number(prompt(`Digite o preço do ingresso`)) <= 15;
let lanchinho = prompt(`Qual sanck que você quer comprar?`)
let cinemaComAmigo = (generoFilme, precoIngresso) => {
    if (generoFilme === `fantasia` && precoIngresso) {
        console.log("bom filme")
        console.log(`Aproveite o seu` + lanchinho)

    } else {
        console.log("Escolha outro filme :(")

    }

}
cinemaComAmigo(generoFilme, precoIngresso)