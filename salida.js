console.log('hello world');
// tipos de datos 
var myString = 'hello mayo';
myString = 22 + "";
var myNumber = 23;
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
var resultSuma = function (num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
var result2Suma = function (num1, num2) {
    if (num1 === void 0) { num1 = 23; }
    if (num2 === void 0) { num2 = 13; }
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
    return ("".concat(name, " ").concat(lastName));
};
var sumar = function sumar(valor1, valor2) {
    return valor1 + valor2;
};
console.log(sumar(10, 5));
var resultado = function showTODO(todo) {
    console.log("".concat(todo.tittle, " , ").concat(todo.text));
};
resultado({
    tittle: 'EatDiner',
    text: 'loren'
});
var prueba = { tittle: 'EatDine7r', text: 'lorent' };
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
var Person = /** @class */ (function () {
    function Person(name, lastName, age) {
        this.firstName = name;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.register = function () {
        console.log("".concat(this.firstName, " was registered"));
    };
    return Person;
}());
var jony = new Person('jony');
console.log(jony.register());
//document.write();
// codigo fuente para revisar -- https://github.com/FaztWeb/typescript-course
