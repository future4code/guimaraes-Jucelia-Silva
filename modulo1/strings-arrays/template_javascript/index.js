// 1. Exercício

let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 13

let i = 0
console.log('d. ', array[i]) // 3

array[i + 1] = 19
console.log('e. ', array) // array (11)

const valor = array[i + 6]
console.log('f. ', valor) // 9 


// 2. Exercício

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // 29 que siginifica a quantidade de itens que está no Array. 

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nomeDoUsuario = prompt("Digite o seu nome")
const emailDoUsuario = prompt("Digite o seu email")

console.log("O email " + emailDoUsuario + " foi cadastrado com sucesso! Seja bem-vinda(o)" + nomeDoUsuario)


//2.Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:


const comidasPreferidas = ['lasanha', 'churrasco', 'feijoada', 'torta de frango', 'arroz']

console.log(comidasPreferidas) //Imprima no console o array completoS

console.log(`Essas são as minhas comidas preferidas  
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`) //Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

comidasPreferidas[1] = prompt(`Qual é sua comida preferida?`)

console.log(comidasPreferidas) //Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista


//3. Faça um programa, seguindo os passos:
//.Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas.

const listaDeTarefas = [];

listaDeTarefas[0] = prompt(`Digite a sua premeira tarefa do dia`);

listaDeTarefas[1] = prompt(`Digite a sua segunda tarefa do dia`);

listaDeTarefas[2] = prompt(`Digite a sua teceira tarefa do dia`);

console.log(listaDeTarefas);

const indice = prompt(`Digite o indice da tarefa que você realizou: 0 para ${listaDeTarefas[0]}, 1 para ${listaDeTarefas[1]}, 2 para ${listaDeTarefas[2]}`);

listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)



//DESAFIO
//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços.



const frase = ['eu', 'amo', 'chocolate!']
console.log(frase)


//2.Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array.

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const indiceAbacaxi = frutas.indexOf("Abacaxi")
console.log(indiceAbacaxi)
const comprimento = frutas.length
console.log("Comprimento:", comprimento)