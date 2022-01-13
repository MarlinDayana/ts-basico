"use strict";
console.log('hello world');
// tipos de datos 
var myString = 'hello mayo';
myString = 22 + "";
let myNumber;
var myBoolean = true || false;
var myVar = 'hello';
myVar = 22;
// arrays 
var myArrayString = ["", "", "", ""];
myArrayString = ['hello', 'world', 23, 'true'];
var myArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8];
var myArrayBoolean = [true, false, false, true];
var myArray = ['item1', 5, 'item2', 'helloworld', [], {}];
// tuples 
var strTuple;
strTuple = ['hello', 13, true];
// void, undefine, null // algo pasa con el let y el const -- revisar
var myUndefined = undefined;
var myVoid = undefined;
var myNull = null;
// funciones 
// no entiendo el error 
var holass = function suma(num1, num2) {
    return num1 + num2;
};
function resultSuma(num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
let result2Suma = function (num1 = 23, num2 = 13) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
var nombre = function getName(name, lastName) {
    if (lastName === undefined) {
        return name;
    }
    return (`${name} ${lastName}`);
};
var sumar = function sumar(valor1, valor2) {
    return valor1 + valor2;
};
console.log(sumar(10, 5));
var resultado = function showTODO(todo) {
    console.log(`${todo.tittle} , ${todo.text}`);
};
resultado({
    tittle: 'EatDiner',
    text: 'loren'
});
var prueba = { tittle: 'EatDine7r', text: 'lorent' };
resultado(prueba);
// clases 
class Usuario {
    // aqui pueden ir las propiedades, pero mejor se colocan en el constructor para optimizzar el codigo 
    constructor(nombre, email, age) {
        this.nombre = nombre;
    }
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
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    register() {
        console.log(`${this.name} was registered`);
    }
    showmeAge() {
        return this.age + 'years';
    }
    pago() {
        console.log(`el usuario ${this.name} ya registro el pago`);
    }
}
class Member extends Person {
    constructor(id, name, lastName, age) {
        super(name, lastName, age);
        this.id = id;
    }
    pay() {
        super.pago();
    }
}
var jony = new Person('jony', 'smith', 30);
let gordon = new Member(12, 'gordon', 'Trump', 54);
gordon.pay();
console.log(gordon.pay());
console.log(jony.register() + jony.showmeAge());
document.write();
// codigo fuente para revisar -- https://github.com/FaztWeb/typescript-course
