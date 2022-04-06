let res = window.document.querySelector('#res')
let computador = 0
let jogador = 0


// ESCOLHE UM NÚMERO ALEATÓRIO - E o joga para a 'let computador'.
function sortear(){
    let min = 1
    let max = 10
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

//
function jogar(){
    jogador = Number(window.prompt('Qual é o seu palpite?'))

    if (jogador < computador){
        res.innerHTML += `Você disse ${jogador}. Meu número é >> MAIOR<br>`
        res.style.background = 'black'
        res.style.color = 'crimson'
        res.style.padding = '5px'
    
    } else if (jogador > computador){
        res.innerHTML += `Você disse ${jogador}. Meu número é >> MENOR<br>`
        res.style.background = 'black'
        res.style.color = 'green'
        res.style.padding = '5px'

    } else if (jogador == computador){
        res.innerHTML += `PARABÉNS!! Você acertou, eu tinha escolhido o número ${computador}.<br>`
        res.style.background = 'black'
        res.style.color = 'yellow'
        res.style.padding = '5px'
        
    }
}