function idade(){
    let res = window.document.querySelector('#res')
    let nasc = window.prompt('Informe seu Ano de Nascimento:')

    let idade = 2022 - nasc

    res.innerHTML = `Quem nasceu em ${nasc} vai completar ${idade} anos em 2022.`
}