//1. Exercício

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
        console.log(item, index, array)
    })
    //vai ser impresso o obijeto com o nome e o apelido, ou séja os 3 paramento do map.



//2. Exercício

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
})

console.log(novoArrayB)
    // vai ser impresso só um paramento no map, o item que são os nomes e ás posiçoes do array.


//3. Exercício

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
})

console.log(novoArrayC)
    // Vai ser impresso duas posições do array 0 e 1, ele pede para passar pelo filter o paramento item e depois ele pede para retornar o item e o apelido menos o Chijo.



//ATIVIDADES

//1.Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const pets = [
        { nome: "Lupin", raca: "Salsicha" },
        { nome: "Polly", raca: "Lhasa Apso" },
        { nome: "Madame", raca: "Poodle" },
        { nome: "Quentinho", raca: "Salsicha" },
        { nome: "Fluffy", raca: "Poodle" },
        { nome: "Caramelo", raca: "Vira-lata" },
    ]
    //a)Crie um novo array que contenha apenas o nome dos doguinhos
const novoArrayPets1 = pets.map((nome, raca) => {
    return novoArrayPets1.nome ////////////
})
console.log(novoArrayPets1)

//b) Crie um novo array apenas com os cachorros salsicha
const novoArrayPets2 = pets.filter((pets) => {
    return pets.nome, pets.raca === "Salsicha"
})
console.log(novoArrayPets2)

//c)Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const novoArrayPets3 = pets.filter((pets) => {
    return pets.raca.toLowerCase() === "poodle"
})

const novoArrayPets4 = novoArrayPets3.map((pets) => {
    return ` Você ganhou um cupom de desconto de 10% para tosar o/a  ${pets.nome}`
})
console.log(novoArrayPets4)


//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)  Crie um novo array que contenha apenas o nome de cada item
// const produtos1 = produtos.map((produtos) => {
//     return produtos.nome
// })
// console.log(produtos1)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const descontoProdutos = (produtos) => {
    return produtos.map(produtos => {
        console.log("nome:", produtos.nome, "categoria:", produtos.categoria, "preço:", produtos.preco);
        return {
            nome: produtos.nome,
            preco: (produtos.preco * 0.95)

        }

    })
}
descontoProdutos(produtos);


//c)
const produtosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(produtosYpe)