let textoUser = document.querySelector('#textoUser');
let btnEncriptar = document.querySelector('#validarEnc');
let resultado = document.querySelector('#textoResult');

let result = '';

btnEncriptar.addEventListener('click', ()=>{
    // a=x, e=y, i=z, o=w, u=k
    let obj = {
        a: 'x',
        e: 'y',
        i: 'z',
        o: 'w',
        u: 'k'
    }
    for(let letter in textoUser.value){
        if(obj[textoUser.value[letter]]){
            result+=obj[textoUser.value[letter]];
        }else{
            result+=textoUser.value[letter];
        }
    }
    let arrayResult = result.split(' ');
    let result2 = '';
    arrayResult.forEach((element)=>{
        result2+=element;
    });
    resultado.innerText = result2;
});