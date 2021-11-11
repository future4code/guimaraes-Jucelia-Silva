//1.Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

/*let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
    //resposta 10 5 


//2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b


console.log(a, b, c)

/*resposta acho que imprimira 10
c atribuiu o valor de a = 10
b atribuiu o valor de c = 10
a atribuiu o valor de b = 10*/

// 3.Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.


/*let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/*resposta: retorna o valor a receber por horas, no meu caso o resultado deu 12.5 por hora.*/


/*let comidaFavorita = prompt("Qual é sua comida favorita?");
let musicaPreferida = prompt("Qual é sua musica preferida?");

console.log(`Qual é sua comida favorita? ${comidaFavorita}!`);
console.log(`Qual é sua musica preferida? ${musicaPreferida}!`);
console.log(typeof comidaFavorita);
console.log(typeof musicaPreferida);*/

// ás duas retorna string com a pergunta e a resposta

const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual a sua idade?");


console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);
console.log(typeof nome);
console.log(typeof idade);

// retonta string com Meu nom é Jucelia e eu tenho 24 anos.


let roupaVermelha = prompt("Você está de roupa vermelha?");
let temCarro = prompt("Você tem carro?");
let gostaEstudar = prompt("Você gosta de estudar?");

console.log(`Você esta de roupa vermelha? ${roupaVermelha}!`);
console.log(`Você tem carro? ${temCarro}!`);
console.log(`Você gosta de estudar? ${gostaEstudar}!`);


/*Resposta: Você esta de roupa vermelha? sim!
 Você tem carro? sim!
Você gosta de estudar? sim!*/

//3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial

let a = 10
let b = 25