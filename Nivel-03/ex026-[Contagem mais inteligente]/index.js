function contar(){
    let num1 = Number(window.document.querySelector('#numMSG01').value)
    let num2 = Number(window.document.querySelector('#numMSG02').value)
    let res2 = window.document.querySelector('#res2')
    let res = window.document.querySelector('#res')

    res2.innerHTML = `Contando de ${num1} até ${num2}`

    if (num1 == num2){
        res.innerHTML = '[ERRO] Impossível contar dois números iguais.'

    } else if (num1 < num2){
        while (num1 <= num2){
            res.innerHTML += `${num1} ~ `
            num1++
        }
        res.innerHTML += `🏁`
    
    } else if (num1 > num2){
        while (num1 >= num2){
            res.innerHTML += `${num1} ~ `
            num1--
        }
        res.innerHTML += `🏁`
    } 
}
