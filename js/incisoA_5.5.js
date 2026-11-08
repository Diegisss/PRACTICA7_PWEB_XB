var nombre, edad
nombre = prompt("Cual es su nombre");
if(nombre == undefined){
    alert("Cancelando!");
} else if(nombre == ""){
    alert("Sin nombre!!!");
}else{
    edad = prompt("Cual es tu edad?");
    if(edad == undefined){
        alert("Cancelando!");
    }else if(edad == ""){
        alert("No tienes edad!!!");
    }else if(edad >= 18){
        alert("Bienvenido " + nombre + " tienes " + edad + " años, eres mayor de edad");
    }else{
        alert("Bienvenido " + nombre + " tienes " + edad + " años, eres menor de edad");
    }
}

var A = 30, B=-15;

if(B<A){alert("B no es mayor que A");}
if(A<0 | A!=0){alert("A es negativo o diferente de cero");}
if(B+15 < A){alert("B+15 no es mayor que A");}