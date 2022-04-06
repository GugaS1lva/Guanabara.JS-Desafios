function iniciar(){
    let res = window.document.querySelector('#res')
    let num1 = Number(window.prompt('Digite o PRIMEIRO valor:'))
    let num2 = Number(window.prompt('Digite o SEGUNDO valor:'))
    let escolha = Number(window.prompt(`Valores informados: ${num1} e ${num2}. 
    O que vamos fazer?
    [1] SOMAR
    [2] SUBTRAIR
    [3] MULTIPLICAR
    [4] DIVIDIR`))

    if (escolha == 1){
        res.innerHTML = `${num1} + ${num2} = ${num1 + num2}`

    } else if (escolha == 2){
        res.innerHTML = `${num1} - ${num2} = ${num1 - num2}`

    } else if (escolha == 3){
        res.innerHTML = `${num1} * ${num2} = ${num1 * num2}`

    } else if (escolha == 4){
        res.innerHTML = `${num1} / ${num2} = ${num1 / num2}`
        
    } else {
        res.innerHTML = `[ERRO] - Escolha uma opção válida.`
    }
}