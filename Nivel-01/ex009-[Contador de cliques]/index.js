let res = window.document.querySelector('#res')
let c = 0


function ativarContador(){
    c ++
    res.innerHTML = `O contador está com ${c} cliques.`
}

function zerarContador(){
    c = 0
    res.innerHTML = `Contador Zerado! 🤘🏻🧑🏻‍💻`
}