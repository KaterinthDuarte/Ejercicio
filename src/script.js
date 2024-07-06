
//variables
let figura = prompt ("Ingrese un digito  Cuadrado=1 Circulo=2 Rectangulo=3 Triangulo=4")

let base;
let altura;
let area;
let perimetro_a;
let perimetro_b;
let perimetro_c;
let perimetro_total;
var radio;
const pi = 3.1416

switch (figura){
    case "1":
        altura= parseInt (prompt("Ingrese la altura del cuadrado: "));
        perimetro_a= (4*altura);
        area= (Math.pow(altura,2));
        
        console.log("El perimetro del cuadrado es: "+ perimetro_a);
        console.log("El area del cuadrado es: "+ area);

        break;
    
    case "2":
        radio= parseInt (prompt("Ingrese el radio del circulo: "));
        perimetro_a= (2*pi*Math.pow(radio,2));
        area= (pi*Math.pow(radio,2));

        console.log("El perimetro del circulo es: " + perimetro_a);
        console.log("El area del circulo es: " + area);

        break;

    case "3":
        base= parseInt (prompt("Ingrese la base del rectangulo: "));
        altura= parseInt (prompt("Ingrese la altura del rectangulo: "));
        area= base*altura
        perimetro_a= parseInt(prompt("Ingrese el perimetro a: "));
        perimetro_b= parseInt(prompt("Ingrese el perimetro b: "));
        perimetro_total= (2*(perimetro_a*perimetro_b));

        console.log("El perimetro del rectangulo es: "+ perimetro_a);
        console.log("El area del rectangulo es: "+ area);

        break;

    case "4":
        base= parseInt(prompt("Ingrese la base del tringulo: "));
        altura= parseInt(prompt("Ingrese la altura del triangulo: "));
        area= ((base*altura)/2);
        perimetro_a= parseInt(prompt("Ingrese el perimetro a: "));
        perimetro_b= parseInt(prompt("Ingrese el perimetro b: "));
        perimetro_c= parseInt(prompt("Ingrese el perimetro c: "));
        perimetro_total= perimetro_a + perimetro_b + perimetro_c;

        console.log("El perimetro del triangulo es: "+ perimetro_total);
        console.log("El area del triangulo es: "+ area);

        break;

        default :
        console.log("Intente de nuevo: ")
    
}

