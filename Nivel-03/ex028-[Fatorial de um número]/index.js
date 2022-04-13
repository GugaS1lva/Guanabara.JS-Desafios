function fatorial(){
    let num = Number(window.document.querySelector('#numMSG').value)
    let res2 = window.document.querySelector('#res2')
    let res = window.document.querySelector('#res')

    res2.innerHTML = `Calculando <mark>${num}!</mark>`

    if (num >= 1 && num <= 21){
        fat = 1

        for (let c = num; c > 1; c--){
            fat *= c
            res.innerHTML += `${c} x `
        }
        res.innerHTML += `= <mark>${fat}</mark>`
        
    
    } else {
        res.innerHTML = '[ERRO]'
    }
}