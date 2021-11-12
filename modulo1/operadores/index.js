//1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
    //resultado = bool1 && bool2 && bool3 = a. irá retonar false.

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
    //resultado = bool1 && bool2 && bool3 = b. irá retonar fase.

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)
    //resultado =  !resultado && (bool1 || bool2) = c. true

console.log("d. ", typeof resultado)
    //resultado = variavel d. boolean

//2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
    // resposta: irá retornar um resultado em forma de string concatenado, está sem a conversão do number.


//3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

let premeiroNumero = Number(prompt("Digite um número!"));
let segundoNumero = Number(prompt("Digite outro número!"));

const soma = premeiroNumero + segundoNumero

console.log(soma)


//Exercícios de escrita de código

//Exercicio 1.
const suaIdade = Number(prompt("Digite sua idade!"));
const idadeAmigo = Number(prompt("Digite a idade do seu amigo!"));

console.log(suaIdade > idadeAmigo) //false

console.log(suaIdade !== idadeAmigo) //true

//Exercício 2.
const numeroPar = Number(prompt("Digite um número par!"));
console.log(numeroPar % 2)
    //números par só retorna 0.
    // se inserir números ímpar só retorna o número 1.


// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

let idadeAnos = (prompt("Qual é sua idade em anos?"));

let idadeEmMeses = idadeAnos * 12
let idadeEmDias = idadeAnos * 365
let idadeEmHoras = idadeEmDias * 24

console.log(idadeAnos)
console.log(idadeEmMeses)
console.log(idadeEmDias)
console.log(idadeEmHoras)

//4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

/*O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/

const primeiroNumero = Number(prompt("Digite um número!"));
const segundoNumero = Number(prompt("Digite o segundo número!"));

console.log(primeiroNumero > segundoNumero)
console.log(primeiroNumero === segundoNumero)
console.log(primeiroNumero / segundoNumero)
console.log(segundoNumero / primeiroNumero)