//Exercício 1
//a   process.argv[2] e node index.js parametro
//b 

{const nome = process.argv[2]
const idade = Number(process.argv[3])
const idadeMaisSete = idade + 7

console.log(`EXERCÍCIO 1: Olá, ${nome}! Você tem ${idade} anos.`);

//c
console.log(`EXERCÍCIO 1: Olá, ${nome}! Você tem ${idade} anos. Em sete anos você tera ${idadeMaisSete}.`);
}

//Exercício 2

{const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])


switch(operacao){
	case "soma":
		total = num1 + num2
		break;
	case "subt":
		total = num1 - num2
		break;
    case "mult":
		total = num1 * num2
		break;
    case "div":
        total = num1 / num2
        break;
    default:
        ("Algo está errado")
}

console.log(`EXERCÍCIO 2: Resposta: ${total}`);}

//Exercício 3

{
    const newTask = process.argv[2]
    const tasksList = []
    tasksList.push(newTask)
    console.log(tasksList);
}