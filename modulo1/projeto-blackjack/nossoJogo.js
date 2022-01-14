/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Boas vindas ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {

    // o que fazer se o usuário clicar "ok"
    console.log(`Vamos jogar!`)
} else {
    // o que fazer se o usuário clicar "cancelar"
    console.log(`O jogo acabou`)

}
const carta1 = comprarCarta();
const carta2 = comprarCarta();
const cartaComputador1 = comprarCarta();
const cartaComputador2 = comprarCarta();
// Sorteia uma carta. por exemplo, o rei de ouros

let usuarioValor = carta1.valor + carta2.valor;
let computadorValor = cartaComputador1.valor + cartaComputador2.valor;
// calculando valores 

console.log("usuario - cartas: " + carta1.texto + "," + carta2.texto + " - pontuação " + usuarioValor)
console.log("computador - cartas: " + cartaComputador1.texto + "," + cartaComputador2.texto + " - pontuação " + computadorValor)
    // resultados
if (usuarioValor === computadorValor) {
    console.log("Empate!")

} else if (usuarioValor > computadorValor) {
    console.log("O usuário ganhou!")

} else if (usuarioValor < computadorValor) {
    console.log("O computador ganhou!")

} else {
    console.log("Fim de joogo!")
}