function contar(){
    let res = window.document.querySelector('#res')
    let res2 = window.document.querySelector('#res2')

    res2.innerHTML = 'Contando de 1 atΓ© 10...'
    for (let c = 1; c <= 10; c++){
        res.innerHTML += `${c} π€π»`
    }
    res.innerHTML += ` π`
}