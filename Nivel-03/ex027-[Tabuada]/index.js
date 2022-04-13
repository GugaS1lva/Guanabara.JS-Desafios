function tabuada(){
    let num = Number(window.document.querySelector('#numMSG').value)
    let res2 = window.document.querySelector('#res2')
    
    
    let res = window.document.querySelector('#res')

    res2.innerHTML = `Tabuada de ${num}`
    res.innerHTML = ''
    for (let c = 1; c <= 10; c++){
        res.innerHTML += `${num} x ${c} = ${num * c} <br>`
        res.style.color = 'white'
    }
    

}