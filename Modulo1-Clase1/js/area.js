const lengthSquare = prompt("Cúal es la altura del cuadrado");
const baseTriangle = prompt("Cúal es la base del triangulo");
const lengthTriangle = prompt("Cúal es la altura del triangulo");
const radiusCircle = prompt("Cúal es el radio del circulo");

let areaSquare = Number.parseInt(lengthSquare) * Number.parseInt(lengthSquare);
let areaTriangle = (Number.parseInt(baseTriangle) * Number.parseInt(lengthTriangle))/2;
let areaCircle = 3.1416 * (Number.parseInt(radiusCircle) * Number.parseInt(radiusCircle));

alert("El area del cuadrado es: " + areaSquare);
alert("El area del triangulo es: " + areaTriangle);
alert("El area del circulo es: " + areaCircle);