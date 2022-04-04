function ativarBotão(){
    let res = window.document.querySelector('#res')
    let num = window.prompt('Digite um número para disseca-lo matematicamente:')

    res.innerHTML = `O número a ser analizado aqui é o ${num}.<hr>`
    //Valor Absoluto -> Math.abs()
    res.innerHTML += `<p>Seu valor absoluto é ${Math.abs(num)}</p>`
    //Parte Inteira -> Math.trunc()
    res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(num)}</p>`
    //Valor Inteiro mais Próximo -> Math.round()
    res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(num)}</p>`
    //Raíz Quadrada -> Math.sqrt()
    res.innerHTML += `<p>A sua raíz quadrada é ${Math.sqrt(num)}</p>`
    //Raíz Cúbica -> Math.cbrt()
    res.innerHTML += `A sua raíz cúbica é ${Math.cbrt(num)}`

    //Número Elevado A... -> Math.pow(num, 2) | Math.pow(num, 3) | Math.pow(num, 4)
        //Número Pequeno HTML -> <sup> num </sup>
    res.innerHTML += `<p>O valor de ${num}<sup>2</sup> é ${Math.pow(num, 2)}</p>`
    res.innerHTML += `<p>O valor de ${num}<sup>3</sup> é ${Math.pow(num, 3)}</p>`
}
