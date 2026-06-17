
const divResultado = document.querySelector('#Resultado')
    
    let cont = 0

    for (i = 1; i < 1001; i++){
        if(i % 7 === 0){
            cont++  
        }
        divResultado.innerHTML = `Existem ${cont} entre 1 e 1000 que são divisíveis por 3 e 7 <br>`
    }

