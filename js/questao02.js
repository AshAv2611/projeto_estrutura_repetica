//PEGANDO ELEMENTOS DO DOM
const divFor = document.querySelector('#div-for')
const divResultFrase = document.querySelector('#result-frase')
const inputNum1 = document.querySelector('#num1')
const btnExibir = document.querySelector('#btn-exibir')

// Como fazer array
btnExibir.addEventListener('click',(evt)=>{
    let num1 = Number (inputNum1.value)

   for (i=0; i < (num1 + 1) ; i++)
    if (num1 % i === 0){
        divResultFrase.innerHTML += `${i}, `
        
    }
})

