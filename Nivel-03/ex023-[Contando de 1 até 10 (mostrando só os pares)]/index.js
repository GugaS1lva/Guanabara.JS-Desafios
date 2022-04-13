function contar(){
    let res2 = window.document.querySelector('#res2')
    let res = window.document.querySelector('#res')

    res2.innerHTML = 'Contando de 1 até 10 (mostrando APENAS os pares)'
    for (let c = 1; c <= 10; c++){

        if (c % 2 == 0){
            res.innerHTML += `${c} ~ `
        
        } else {
            res.innerHTML += ''

        }
    }
    res.innerHTML += `🏁`
}