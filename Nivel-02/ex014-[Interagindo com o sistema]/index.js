function horarioAtual(){
    let res = window.document.querySelector('#res')
    let horaAtual = new Date()
    let hora = horaAtual.getHours()
    let minuto = horaAtual.getMinutes()
    let segundo = horaAtual.getSeconds()
    let milisegundo = horaAtual.getMilliseconds()
    res.innerHTML = `Agora são exatamente: ${hora}h ${minuto}min ${segundo}s ${milisegundo}mils`
}