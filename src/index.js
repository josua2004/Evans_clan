class rectangulo {
    altura = 0
    base = 0
    constructor(altura,base) {
        this.altura = altura
        this.base = base 
    }

    area() {
        return this.altura * this.base
    }
}

const rectanguloPeque = new rectangulo(5,2)
const rectanguloGran = new rectangulo(100, 200) 
 
console.log(rectanguloPeque)
console.log(rectanguloGran);


//funciones clases del profe keylor
function nombreFuntion(parametros) {
    parametros();
}

function otra_funcion() {
    console.log('hola mundo ');
}
nombreFuntion(otra_funcion);

let variable = otra_funcion

const funcion_flecha = () => {
   
}


const suma(num1,num2) => num1 + num2
suma(1);

//saludo
const saludo = ( parametro) => console.log(`hola ${parametro}`);
saludo("Evans")
saludo()


//funtion de sumar 
var numero = 0

function sumar(a,b) {
    this.numero;
    return a +b;
    
}

//Objetos 
const persona = {
    nombre: "evans",
    edad: 26,
    saludo: function () {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
         
    }
}

persona.saludo();

// CONSTANTES 
const perro = {
 nombre: "firulais",
 edad: 5,
 raza: "pastor aleman"
}



const perro_rex = [...perro];

const perro2 = perro;
perro2.nombre = "rex";

console.log(perro.nombre);



const nombre

for (let index = 0; index < array.length; index++) {
    console.log();
    
    
}