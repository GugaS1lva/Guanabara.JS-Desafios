function ativarBotão(){
    let res = window.document.querySelector('h2#res')
    let nome = window.prompt('Qual é o seu nome?')

    res.innerHTML = `É um grande prazer te conhecer, ${nome}!🤘🏻🧑🏻‍💻`
}