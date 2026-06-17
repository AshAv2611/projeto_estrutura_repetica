//PEGANDO ELEMENTOS DO DOM
const formFormulario = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')


// Como fazer array
formFormulario.addEventListener('submit',(evt)=>{
    evt.preventDefault()

   for (i=0; i < (num1 + 1) ; i++)
    if (num1 % i === 0){
        divResultFrase.innerHTML += `${i}, `
        
    }
    
})

