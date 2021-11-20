//1. Exercício

function minhaFuncao(variavel) {
    return variavel * 5
}

//minhaFuncao(2)
//minhaFuncao(10)

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a)O que vai ser impresso no console?
//R. vai ser impresso no console os resultados 10 e 50

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//R. daria erro



//2.Exercício

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//R. Essa função estar pedindo para o usuario escrever um texto, porem pede para incluir uma palava no corpo da função, mais no console.log ele pede para imprimir somente a resposta do usuario retornará false caso não tenha a palava decalarda ou verdadeiro se o usuario digitar a palava que estar na função.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   Eu gosto de cenoura
//ii.  CENOURA é bom pra vista
//iii. Cenouras crescem na terra
//R. retornará true

// 1. Atividade
function minhaDescricao() {
    let frase = console.log(`Eu sou Jucélia, tenho 24 anos, moro em Sertãozinho/SP e sou estudante.`)


}
minhaDescricao()

//B. Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
function imprimirinformacoes(nome, idade, endereco, profissao) {

    console.log(nome, idade, endereco, profissao)
}

imprimirinformacoes(`Eu sou Jucelia, tenho 24 anos, moro em sertaozinho/SP, e sou consultora de RH`)

//2.

//a.
function soma(n1, n2) {
    let soma = n1 + n2
    return soma
}

console.log(soma(350, 200))

//b
function maiorOuIgual(n1, n2) {
    return n1 >= n2
}
console.log(maiorOuIgual(350, 200))

//c.
function numeros(valor) {
    if (valor % 4 == 0)
        return true;
    else
        return false;

}
console.log(numeros(87))
console.log(numeros(400))

//d.
function verificar(mensagem) {
    const mensagem1 = mensagem

    return `${mensagem.length}, ${mensagem.toUpperCase()}`
}
console.log(verificar("Olá, Tudo Bem?"))