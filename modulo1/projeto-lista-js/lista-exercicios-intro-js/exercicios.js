// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')

    console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    const numero1 = prompt("Digite a altura")
    const numero2 = prompt("Digite a largura")

    const calculaAreaRetangulo = numero1 * numero2

    console.log(calculaAreaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui
    const anoAtual = prompt("Digite o ano atual")
    const anoNascimento = prompt("Digite o seu ano de nascimento")

    console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
    const imc = peso / (altura * altura)
    return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome = prompt("Qual é o seu nome?")
    const idade = prompt("Qual é a sua idade?")
    const email = prompt("Qual é o seu email")

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
    let cor1 = prompt(`Qual é sua premeira cor favorita?`)
    let cor2 = prompt(`Qual é sua segunda cor favorita?`)
    let cor3 = prompt(`Qual é a sua teceira cor favorita?`)

    const cor = [cor1, cor2, cor3]

    console.log(cor)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
    let letraMsiuscula = string.toUpperCase()
    return letraMsiuscula



}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
    return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui
    let stringNumero1 = string1.length
    let stringNumero2 = string2.length

    return stringNumero1 == stringNumero2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
    return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    let ultimoElemento = array[array.length - 1]
    return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
    let trocar = array.move(1, 0)

    return trocar

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
    let string = string1.toUpperCase() === string2.toUpperCase()

    return string

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui
    const anoAtual = prompt("Digite o ano atual")
    const anoDeNascimento = prompt("Digite o seu ano de nascimento")
    const anoDeEmissao = prompt("Digite o ano de emissão da sua carteira")

    let idade = anoAtual - anoDeNascimento
    let anoDaCarteira = anoAtual - anoDeEmissao

    if (idade <= 20 && anoDaCarteira >= 5) {
        console.log(true)
    } else if (idade > 50 && anoDaCarteira >= 15) {
        console.log(true)
    } else if (idade > 20 && idade < 50 && anoDaCarteira >= 10) {
        console.log(true)
    } else {
        console.log(false)
    }


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // implemente sua lógica aqui
    if (ano % 4 === 0 && ano % 100 !== 0) {
        return true
    } else if (ano % 4 !== 0 && ano % 400 === 0) {
        return true
    } else if (ano % 4 === 0 && ano % 400 === 0) {
        return true
    } else {
        return false
    }

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
    let idade = prompt("Você tem mais de 18 anos?")

    if (idade === "sim") {
        idade = true
    } else {
        idade = false
    }

    let ensinoMedio = prompt("Você possui ensino médio completo?")
    if (ensinoMedio === "sim") {
        ensinoMedio = true
    } else {
        ensinoMedio = false
    }

    let periodo = prompt("Você possui ensino médio completo?")

    if (periodo === "sim") {
        periodo = true
    } else {
        periodo = false
    }


    if (idade && ensino && periodo === true) {
        console.log(true)
    } else {
        console.log(false)
    }

}