var numero, resultado, agregar;
agregar = document.querySelector('p');

numero = prompt("Ingrese un numero");
resultado = numero;
if(numero == ""){alert("Campo vacio!!!");}
else if(numero == undefined){alert("Cancelando!!!");}
else if(numero == 0){agregar.innerHTML=1}
else{
    for(numero; numero>1;numero--){
        resultado = resultado * (numero-1);
    }
    agregar.innerHTML = resultado;
}

