function ativarBotão(){
    let res = window.document.querySelector('h2#res')
    let num1 = window.prompt('Digite um número:')
    let num2 = window.prompt('Digite outro número:')

    let soma = Number(num1) + Number(num2)

    res.innerHTML = `A soma entre ${num1} e ${num2} é igual a ${soma}.`
}