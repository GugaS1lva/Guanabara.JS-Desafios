function ativarBotão(){
    let res = window.document.querySelector('h2#res')

    let nome = window.prompt('Informe seu nome:')
    let nota1 = window.prompt('NOTA - 01')
    let nota2 = window.prompt('NOTA - 02')
    let nota3 = window.prompt('NOTA - 03')
    let nota4 = window.prompt('NOTA - 04')
    let nota5 = window.prompt('NOTA - 05')

    let soma = Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) + Number(nota5)
    let media = soma / 5
    
    res.innerHTML = `Calculando a média final de ${nome}.<br>As notas obtidas foram ${nota1}, ${nota2}, ${nota3}, ${nota4} e ${nota5}.<br>A média final de ${nome} é de ${media}.`
    
}