// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length


}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = []
    for (i = array.length - 1; i >= 0; i--) {

        arrayInvertido.push(array[i]);
    }
    return arrayInvertido


}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b) {
        return a - b
    })


}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i])
        }
    }
    return arrayPares;

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = [];
    for (const i of array) {
        if (i % 2 === 0)
            arrayPares.push(i * i)
    }
    return arrayPares

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return array.reduce(function(a, b) {
        return Math.max(a, b)
    })


}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeros = {
        maiorNumero: 'maiorNumero',
        maiorDivisivelPorMenor: 'maiorDivisivelPOrMenor',
        diferenca: 'diferenca',
    }

    if (num1 > num2) {
        numeros.maiorNumero = num1;
        if (num1 % num2 === 0) {
            numeros.maiorDivisivelPorMenor = true;
        } else {
            numeros.maiorDivisivelPorMenor = false;
        }
        numeros.diferenca = num1 - num2;
    } else {
        numeros.maiorNumero = num2;
        if (num2 % num1 === 0) {
            numeros.maiorDivisivelPorMenor = true;
        } else {
            numeros.maiorDivisivelPorMenor = false;
        }
        numeros.diferenca = num2 - num1;
    }

    return numeros;


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC & ladoC === ladoA) {
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    return array = [array[array.length - 2], array[1]]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {


    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`

}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let anonimo = {...pessoa,
        nome: "ANÔNIMO"

    }
    return anonimo

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let autorizadas = pessoas.filter((pessoa) => {
        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)

    })
    return autorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoAutorizadas = pessoas.filter((pessoa) => {
        return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })
    return naoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (const conta of contas) {
        somaCompras = conta.compras.reduce((soma, i) => {
            soma += i
            console.log(conta.compras, soma);
            return soma

        });
        conta.saldoTotal -= somaCompras


        conta.compras = []

        return contas
    }

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    var consultasOrdenadas = [];
    for (var i = 0; i < consultas.length; i++) {
        consultasOrdenadas.push(consultas[i].nome);
    }
    consultasOrdenadas.sort();
    var consultacomparar = [];
    for (var i = 0; i < consultasOrdenadas.length; i++) {
        for (var j = 0; j < consultas.length; j++) {
            if (consultasOrdenadas[i] === consultas[j].nome) {
                consultacomparar.push(consultas[j]);
            }
        }
    }
    return consultacomparar;


}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for (let consulta of consultas)

        consulta.dataDaConsulta = consulta.dataDaConsulta.split('/').reverse().toString().replaceAll(',', '');

    consultas.sort(function(a, b) {
        return (a.dataDaConsulta > b.dataDaConsulta) ? 1 : ((b.dataDaConsulta > a.dataDaConsulta) ? -1 : 0);
    })

    for (let indice of consultas)
        indice.dataDaConsulta = indice.dataDaConsulta.replace(/^(\d{4})(\d{2})(\d{2}).*/, '$3/$2/$1');

    return consultas

}


//${oDiaboVestePrada.atores[1]}, ${oDiaboVestePrada.atores[2]}, ${oDiaboVestePrada.atores[3]}.