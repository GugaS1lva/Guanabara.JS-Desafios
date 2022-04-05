function analizar(){
    let res = window.document.querySelector('#res')
    let dadosAtuais = new Date()
    
    let ano = dadosAtuais.getUTCFullYear()
    let mes = dadosAtuais.getUTCMonth()
    let dia = dadosAtuais.getUTCDate()
    let dsem = dadosAtuais.getUTCDay()
    let hor = dadosAtuais.getHours()
    let min = dadosAtuais.getMinutes()
    let sec = dadosAtuais.getSeconds()

    res.innerHTML = `Hoje temos...`
    res.innerHTML += `<br>Ano - ${ano}`
    res.innerHTML += `<br>Mês - <mark>${mes}</mark>`
    res.innerHTML += `<br>Dia - ${dia}`
    res.innerHTML += `<br>Dia da Semana - <mark>${dsem}</mark>`
    res.innerHTML += `<br>Hora - ${hor}`
    res.innerHTML += `<br>Minuto - ${min}`
    res.innerHTML += `<br>Segundo - ${sec}`
}