function calcularMédia(){
    let res = window.document.querySelector('#res')
    let nome = window.prompt('Informe abaixo seu nome completo:')

    let nota1 = window.prompt('NOTA - 01')
    let nota2 = window.prompt('NOTA - 02')
    let nota3 = window.prompt('NOTA - 03')
    let nota4 = window.prompt('NOTA - 04')
    let nota5 = window.prompt('NOTA - 05')

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) + Number(nota5)) / 5

    res.innerHTML = `As notas obtidas foram respectivamente: ${nota1} , ${nota2} , ${nota3} , ${nota4} e ${nota5}.`
    res.innerHTML += `<br>A média final foi: ${media}`
    
    if (media >= 6){
        res.innerHTML += `<br>Você foi: APROVADO`
    } else {
        res.innerHTML += `<br>Você foi: REPROVADO`
    }
}