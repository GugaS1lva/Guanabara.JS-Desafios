function contar(){
    let res2 = window.document.querySelector('#res2')
    let res = window.document.querySelector('#res')
    let num = Number(window.document.querySelector('#numMSG').value)
    
    res2.innerHTML = `Contando de 0 até ${num}`
    
    for (let c = 1; c <= num; c++){
        res.innerHTML += `${c} ~ `
    }
    res.innerHTML += `🏁`
}