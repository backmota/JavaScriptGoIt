/*
En JavaScript contamos con 3 tipos de opciones para declarar un entidad,
Para entidades que pueden cambiar de valor usaremos var, con const vamos a declarar entidades que nunca van a cambiar de valor
y con let declaramos entidades que cambian de valor pero su valor solo se mantiene en su scope(lo revisaremos en clases posteriores)
*/

var change = "Puedo cambiar de valor";
const notChange = "No puedo cambiar de valor";
let scopeLimit = "Cambio de valor dentro del scope o ambito";

console.log(change);
console.log(notChange);
console.log(scopeLimit);

/*JavaScript cuenta con diversas propiedades y metodos, para trabajar con nuestras entidades 
y podemos acceder a ellas por medio de un punto:

Por ejemplo la entidad .length nos permite saber la cantidad de caracteres en una cadena y con el método .toUpperCase();
podemos cambiar el texto a mayúsculas
*/

console.log("La variable change tiene un total de " + change.length + " caracteres");

//Vamos a guardar el texto de change en mayusculas en una nueva variables

var exampleUpperCase = change.toUpperCase();

console.log(exampleUpperCase);

//Para guardar la información en minusculas podemos usar el siguiente metodo 

var exampleLowerCase = exampleUpperCase.toLowerCase();

console.log(exampleLowerCase);

/* Recordemos que JavaScript define el valor de nuestras variables, pero si queremos revisar que lo guarda de forma correcta
podemos utilizar typeof*/

let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"

/* Las interacciones de usuario nos permiten mostrar información en pantalla o recibir información
Por ejemplo con el método alert() podemos crear un popUp con la información que deseamos por ejemplo un saludo
*/

const hello = "Hola! ";
alert(hello); 

/*Con el método confirm() podemos mostrar un modal o popUp al usuario donde nos confirme con un Ok la información o cancele la acción
por ejemplo es útil si deseamos confirmar una compra o preguntar si el usuario es mayor de edad*/

var ageVerification = confirm("Eres mayor de edad?");
console.log(ageVerification); 

//La información se almacena como true si es ok y false para cancel
alert("La opción seleccionada a si eres mayor de edad fue: " + ageVerification);

/*De igual forma es posible pedirle al usuario que ingrese información el método prompt(), el cual podemos almacenar utilizar en otra acción*/

const nameHost = prompt("Cúal es tu nombre?");
alert(hello + nameHost);

/* Adicional a las operaciones aritmeticas de suma, resta, multiplica y dividir podemos utilizar operadores de comparación y de igualdad*/

const x = 5;
const y = 10;
const z = 5;

console.log("x > y:", x > y); // false
console.log("x < y:", x < y); // true
console.log("x < z:", x < z); // false
console.log("x <= z:", x <= z); // true
console.log("x === y:", x === y); // false
console.log("x === z:", x === z); // true
console.log("x !== y:", x !== y); // true
console.log("x !== z:", x !== z); // false

console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

/* Como revisamos anterior mente en JavaScript por defecto nos asigna un valor a nuestras variables,
pero puede darse el caso que el valor asignado no sea el esperado y esto pueda generar errores al realizar operaciones
*/

let iAmNumber = 10;
let iAmText = "10";

console.log(typeof iAmNumber);
console.log(typeof iAmText);

//La lógica nos dice que no podemos sumar un string con un número pero si realizamos el expertimento

let sumValues = iAmNumber + iAmText;

console.log(sumValues);
//Tendremos como resultado 1010 en lugar de 20 y esto se debe a que convirtio a nuestro int a un string 

//Para tener el control de las acciones que buscamos realizar tenemos que parsear la información antes

let parseNumberSum = iAmNumber + Number.parseInt(iAmText);

console.log(parseNumberSum);

/*El mótivo por el cual contamos con dos tipos de método númericos de parse es que uno convierte a enteros por lo que perdemos 
la información despues del punto decimal y otro la mantiene*/

console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN

console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

