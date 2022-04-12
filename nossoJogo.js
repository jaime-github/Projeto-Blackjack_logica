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

const mensagemParaUsuario = ("Boas vindas ao jogo de Blackjack!")
console.log (mensagemParaUsuario)

const confirmacaoUsuario = confirm("Quer iniciar uma nova rodada?")

    let primeiraNovaCarta = comprarCarta()
    let segundaNovaCarta = comprarCarta()
    let terceiraNovaCarta = comprarCarta()
    let quartaNovaCarta = comprarCarta()

    const pontuacaoDoUsuario = primeiraNovaCarta.valor + segundaNovaCarta.valor
    const pontuacaoDoComputador = terceiraNovaCarta.valor + quartaNovaCarta.valor


if (confirmacaoUsuario === false)  {
	console.log ("O jogo acabou!") // o que fazer se o usuário não clicar em OK e "cancelar" a continuidade do jogo.

} else {	
   console.log(`Usuario - cartas: , ${primeiraNovaCarta.texto}, ${segundaNovaCarta.texto},  - pontuação, ${pontuacaoDoUsuario}`) 
   console.log(`Computador - cartas: , ${terceiraNovaCarta.texto}, ${quartaNovaCarta.texto} - pontuação, ${pontuacaoDoComputador}`)
   // o que fazer se o usuário clicar "ok"
}

if (pontuacaoDoUsuario > pontuacaoDoComputador) {
console.log("O usuário ganhou!")
}else if (pontuacaoDoUsuario === pontuacaoDoComputador) {
console.log(`Empate!`)
}
else {
console.log(`O computador ganhou`)
}


