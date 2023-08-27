let boton = document.querySelector("#BotonJS");
let salida = document.querySelector("#ConteoJS");

let numero = 0;

boton.addEventListener('click', ()=>{
    console.log("Presionado");
    numero+=1;
    salida.innerText = numero;
    if(numero>=15){
        salida.className = "color-critic";
    }
})