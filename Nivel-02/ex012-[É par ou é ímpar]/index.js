function parOuImpar(){
    let res = window.document.querySelector('#res')
    let numMSG = window.prompt('Digite um número abaixo:')
    let num = Number(numMSG)

    if (num == 0){
        res.innerHTML = `0 NA TEORIA é PAR, mas isso ainda soa estranho...`
    } else if (num % 2 == 0){
        res.innerHTML = `O número ${num} é PAR!`
    } else if (num % 2 == 1){
        res.innerHTML = `O número ${num} é ÍMPAR!`
    } else{
        res.innerHTML = '[ERRO] Número Inválido.'
    }
}