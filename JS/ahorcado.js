let campoUser = document.querySelector('#inputUser');
let btnValidar = document.querySelector('#validarEntrada');
let vidas = document.querySelector('#vidas');
let txtResult = document.querySelector('#textoResult');

let letra1 = document.querySelector('#A');
let letra2 = document.querySelector('#G');
let letra3 = document.querySelector('#U');
let letra4 = document.querySelector('#A2');
let letra5 = document.querySelector('#C');
let letra6 = document.querySelector('#A3');
let letra7 = document.querySelector('#T');
let letra8 = document.querySelector('#E');

let contador = 0;

objLetras = {
    'A': [letra1, letra4, letra6],
    'G': letra2,
    'U': letra3,
    'C': letra5,
    'T': letra7,
    'E': letra8
}

btnValidar.addEventListener('click', ()=>{
    if(objLetras[campoUser.value.toUpperCase()]){
        if(Array.isArray(objLetras[campoUser.value.toUpperCase()])){
            objLetras[campoUser.value.toUpperCase()].forEach(element => {
                element.className = 'visible'
                campoUser.value = "";
                contador+=1;
            });
        }else{
            objLetras[campoUser.value.toUpperCase()].className = 'visible';
            campoUser.value = "";
            contador+=1;
        }
        if(contador==8){
            txtResult.innerText = 'Has ganado'
            campoUser.value = "";
        }
    }else{
        let numeroVidas = vidas.textContent.split(' ')[1];
        let parsedNumber = parseInt(numeroVidas);
        let resultadoRestar = parsedNumber - 1;
        vidas.innerText = `Vidas: ${resultadoRestar}`
        campoUser.value = "";
        if(resultadoRestar == 0){
            txtResult.innerText = 'Has perdido'
            campoUser.value = "";
        }
    }
});

