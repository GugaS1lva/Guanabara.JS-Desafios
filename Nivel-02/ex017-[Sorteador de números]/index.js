let res = window.document.querySelector('#res')

function randomizar(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() //RANDOMIZA UM NÚMERO
    let numeroSorteado = min + Math.trunc(dif * aleatorio)

    res.innerHTML += `Pensei no >>> ${numeroSorteado}<br>`
}

function limpar(){
    res.innerHTML = ''
}
