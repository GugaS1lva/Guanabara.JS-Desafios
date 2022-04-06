function iniciar(){
    let res = window.document.querySelector('#res')
    let mes = window.prompt('Digite o mêx por extenso (Ex: Setembro).')
    let estação

    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estação = 'INVERNO'
            break;
        
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'PRIMAVERA'
            break;
        
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'VERÃO'
            break;

        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'OUTONO'
            break;

        default:
            estação = 'INDEFINIDA'
            break;
    }
    res.innerHTML = `No mês ${mes}, será a estação ${estação}.`
}