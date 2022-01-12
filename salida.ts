console.log('hello world')

// tipos de datos 

var myString: string ='hello mayo';

myString=22+"";

var myNumber: number = 23;

var myBoolean: boolean =true||false;

var myVar:any='hello';

myVar=22;

// arrays 

var myArrayString:any[]=["","", "", ""];
myArrayString=['hello', 'world', 23, 'true']

var myArrayNumber=[1,2,3,4,5,6,7,8];

var myArrayBoolean=[true, false, false, true];

var myArray:any=['item1', 5, 'item2', 'helloworld', [], {}];

// tuples 

var strTuple:[string, number, boolean];

strTuple=['hello', 13, true];


// void, undefine, null // algo pasa con el let y el const -- revisar

var myUndefined : undefined =undefined;

var myVoid : void =undefined;

var myNull : null =null;


// funciones 

// no entiendo el error 
var holass = function suma(num1:number, num2:number):number {
    return num1 + num2;
}

var resultSuma = function (
    num1:number | string, 
    num2:number | string):number {
    if (typeof num1 === 'string'){
        num1=parseInt(num1);
    }
    if (typeof num2 === 'string'){
        num2=parseInt(num2);
    }
    return num1 + num2;
}


var result2Suma = function (
    num1:number | string= 23, 
    num2:number | string = 13):number {
    if (typeof num1 === 'string'){
        num1=parseInt(num1);
    }
    if (typeof num2 === 'string'){
        num2=parseInt(num2);
    }
    return num1 + num2;
}

var nombre = function getName (
    name:string, 
    lastName?:string):string {
        if (lastName===undefined) {
            return name;
        }
    return (`${name} ${lastName}`)
}


var sumar = function sumar(valor1:number, valor2:number): number {
    return valor1+valor2;
  }
  
 console.log(sumar(10, 5));

// const message = "Hello World!"; // -- porque putas no funcuina const 
// interfaces

interface ITODO {
    tittle: string,
    text: string
}


 var resultado= function showTODO(todo:ITODO){
        console.log(`${todo.tittle} , ${todo.text}`)
}

resultado({
    tittle:'EatDiner',
    text:'loren'
});


var prueba : ITODO = {tittle: 'EatDine7r', text:'lorent'}

resultado(prueba);



// clases 


// class Usuario {
//     nombre: string;
//     email: string;
//     age: number

//     constructor() {
//         /*acá va tu código*/
//      }
// }

// class MiClase {
//     constructor(nombre:string, apellido:string) {
//     }
// }

// scripts 


class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(name?:string, lastName?:string, age?:number){
        this.firstName = name;
        this.lastName = lastName;
        this.age = age;

    }

    register() {
        console.log(`${this.firstName} was registered`)
    }

    
}

var jony = new Person('jony');

console.log(jony.register())
//document.write();





// codigo fuente para revisar -- https://github.com/FaztWeb/typescript-course

