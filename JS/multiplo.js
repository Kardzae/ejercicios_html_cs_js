let campo = document.querySelector('#campoUser');
let btnValidar = document.querySelector('#btnResult');
let validacion = document.querySelector('#validarTxt');

btnValidar.addEventListener('click', ()=>{
    let number = parseInt(campo.value);
    if((number % 3)==0){
        validacion.innerText = "SI es un número multiplo de 3";
    }else{
        validacion.innerText = "NO es un número multiplo de 3";
    }
});

