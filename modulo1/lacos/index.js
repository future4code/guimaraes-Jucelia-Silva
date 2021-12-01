// 1. Exercicio 

/*let valor = 0
for (let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)
    //R.valor 10 o indice é igual á 5.


// 2. Exercício

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}
//R. Ele pede para imprimir os números da lista apartir do número 18.

//B) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//R. sim e poderia usar o array.length

//3. Exercício
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
    let linha = ""
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}
//R. Ele pede para imprimir o número "*", ão digitar o número 1.


//ATIVIDADE

//1.Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

let bichinhosDeEstimacao = Number(prompt(`Quantos bicinhinhos de estimação você tem?`));

let arrayDeBichinhos = []

if (bichinhosDeEstimacao === 0) {
    console.log("Que pena! Você pode adotar um pet!")

} else if (bichinhosDeEstimacao > 0) {
    for (let i = 0; i < bichinhosDeEstimacao; i++)

    {
        let nomeDosBichinhos = prompt(`Digite aqui os nomes dos seus bichinhos`)

        arrayDeBichinhos.push(nomeDosBichinhos);
    }
    console.log(" Os nomes são: ", arrayDeBichinhos);

} */

//2.

const arrayOriginal = [20, 35, 80, 90, 55, 70]

const maiorMenor = (array) => {
    let maiorNum = 0
    let menorNum = Infinity

    for (let i = 0; i < array.lenhth; i++) {
        if (array[i] < menorNum) {
            menorNum = array[i]
                //console.log(`menorNum`, menorNum)
        } else if (array[i] > maiorNum) {
            maiorNum = array[i]
                //console.log(`maiorNum`, maiorMenor)
        }
    }

    console.log("O menor número é", menorNum)
    console.log("O maior número é", maiorNum)

}
maiorMenor(arrayOriginal)