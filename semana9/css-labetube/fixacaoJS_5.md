<!-- Enunciado
Temos um array de animais diversos, onde cada bichinho é um objeto com as propriedades: nome e classificacao. A classificacao tem três valores possíveis: peixe, ave ou mamífero

Crie um novo array que tenha apenas os nomes dos animais, no formato de strings.

Observação: não altere o array de animais! Apenas o utilize para criar seu novo array utilizando a função map.


function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 const nomeDosAnimais = animais.map((animais, indice, array)=>
 { -->