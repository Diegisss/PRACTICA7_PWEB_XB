function multiplicar(num1,num2){
    var producto=num1*num2;
    return producto;
}
document.write(multiplicar(2,7));

function categoria(num){
    var mensaje, agregar;
    agregar = document.querySelector('p')
    mensaje = ((num>0) ? ("<br>" + num + " es positivo") : 
    (num==0) ? ("<br>" + num + " es cero") : ("<br>" + num + " es negativo"));

    agregar.innerHTML=mensaje;
}


function convertidor(km){
    var millas, agregar;

    agregar = document.querySelector('#p1');
    millas = km * 0.62;

    agregar.innerHTML = km + " km convertidos a millas son " + millas;

}