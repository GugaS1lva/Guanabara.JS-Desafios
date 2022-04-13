function contagemRegressiva(){
    let res2 = window.document.querySelector('#res2')
    let res = window.document.querySelector('#res')

    res2.innerHTML = 'Vai explodir em...'
    for (let c = 10; c >= 1; c--){
        res.innerHTML += `${c} ~ `
    }
    res.innerHTML += `🏁`
}