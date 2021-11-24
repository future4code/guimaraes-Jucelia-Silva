//1.




const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario: "14h" }
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// no console.log é imprimido a posição [0] e [1] do elenco, e a posição [2] das tramissoesHoje.

//2.

const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba" }

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
    // será impresso os nomes do gato, cacharros e tartaruga com suas idades e raça.
    // a sintaxe dos trêis pontos são uma atribuiçao do que ja foi escrito dentro do obijeto, uma completaçao não é necessario escrever novamente.


function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
    // vai ser impresso false e undefined
    // esses valores são impresso porque a função retorna como false, e é impresso no console.log undefined porque ele pede para imprimir algo que não foi decalardo.





// 1. Exercícios:


const pessoa = {
    nome: "Jucelia",
    apelidos: ["ju", "jujuba", "josy"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)


const novaPessoa = {
    ...pessoa,
    apelidos: ["jack", "jujuca", "jozinha"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}`)



//2.

const obijeto1 = {
    nome: "jucelia",
    idade: 24,
    profissao: "progamadora"
}

const obijeto2 = {
    nome: "jucelia",
    idade: 24,
    profissao: "progamadora"
}
const frase = (parametro) => {

    let array = [parametro.nome, parametro.nome.length, parametro.idade, parametro.profissao, parametro.profissao.length]
    return array
}
console.log(frase(obijeto1))


//3.

let carrinho = []

const mamao = {
    nome: "mamao",
    desponabilidade: true
}

const maca = {
    nome: "maca",
    disponabilidade: true
}

const banana = {
    nome: "banana",
    deisponabilidade: true
}

const minhasFruras = (frutas) => {
    carrinho.push(frutas)
    return carrinho
}

console.log("carrinho", minhasFruras(mamao))
console.log("carrinho", minhasFruras(maca))
console.log("carrinho", minhasFruras(banana))