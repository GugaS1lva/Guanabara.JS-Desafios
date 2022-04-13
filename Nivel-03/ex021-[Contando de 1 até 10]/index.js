function contar(){
    let res = window.document.querySelector('#res')
    let res2 = window.document.querySelector('#res2')

    res2.innerHTML = 'Contando de 1 até 10...'
    for (let c = 1; c <= 10; c++){
        res.innerHTML += `${c} 🤘🏻`
    }
    res.innerHTML += ` 🏁`
}