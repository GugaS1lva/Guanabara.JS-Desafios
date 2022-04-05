function calcular(){
    let res = window.document.querySelector('#res')
    let numMSG1 = window.prompt('Informe o PRIMEIRO valor:')
    let numMSG2 = window.prompt('Informe o SEGUNDO valor:')

    let num1 = Number(numMSG1)
    let num2 = Number(numMSG2)
    
    if (num1 == num2){
        res.innerHTML = `Os valores ${num1} e ${num2} são IGUAIS.`
    } else if (num1 > num2){
        res.innerHTML = `O MAIOR número é ${num1}.`
    } else if (num1 < num2){
        res.innerHTML = `O MAIOR número é ${num2}`
    } else{
        res.innerHTML = '[ERRO] Número Inválido.'
    }
}