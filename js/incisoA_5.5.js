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