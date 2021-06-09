
let radio=prompt("ingrese radio del Circulo");

function calcCircumfrence(){
    document.write("La Circunferencia es "+ 2*3.141569*radio);
}

function calcArea(){
    document.write(" y su área  es "+3.141569*radio*radio);
}

function calculateDogAge(){
    edad=prompt("Introduzca la edad de su perrito");    
    
}

calcCircumfrence();
calcArea();

for (let p = 0; p <=2; p++) {
    calculateDogAge();   
    document.write("<br>Tu perrito tiene "+edad*7+ " años humanos");
}

