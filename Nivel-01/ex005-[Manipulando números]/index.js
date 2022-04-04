window.alert('Seja bem vindo(a) ao meu site!')
function ativarBotão(){
    let res = window.document.querySelector('h2#res')
    let num = window.prompt('Digite um número:')

    res.innerHTML = `O dobro de ${num} é ${num * 2} e a metade do mesmo número é ${num / 2}!`
}