console.log('hello world')

// tipos de datos 

var myString: string ='hello mayo';

myString=22+"";

let myNumber: number ;

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

 function resultSuma(
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


let result2Suma = function (
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


class Usuario {

    // aqui pueden ir las propiedades, pero mejor se colocan en el constructor para optimizzar el codigo 

    constructor(public nombre: string, 
        email: string, age: number) {

     }

     // debajo del constructor se escriben los mestodos que requiera la clase 
}


// scripts 


class Person {
    // firstName: string;
    // lastName: string;
    // age: number;

    // constructor(name?:string, lastName?:string, age?:number){
    //     this.firstName = name;
    //     this.lastName = lastName;
    //     this.age = age;

    // }
    constructor(
        public name: string,
        protected lastName: string,
        public age: number
    ) {}

    register() {
        console.log(`${this.name} was registered`)
    }

    public showmeAge(){
        return this.age + 'years';
    }

    pago(){
        console.log(`el usuario ${this.name} ya registro el pago`)
    }
    
}

class Member extends Person {
    id: number;

    constructor (id: number, name: string, lastName: string, age: number){
        super(name, lastName, age);
        this.id = id;
    }

    pay(){
        super.pago();
    }
}

var jony = new Person('jony', 'smith', 30);

let gordon = new Member(12, 'gordon', 'Trump', 54);

gordon.pay()

console.log(gordon.pay())
console.log(jony.register() + jony.showmeAge())
document.write();





// codigo fuente para revisar -- https://github.com/FaztWeb/typescript-course

