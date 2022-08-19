const food = {
	name: "clamchowder",
	price: 300,
	availability: true,
	allergy: "seafood",
};

const json = '{"name":"Mango","age":3,"isHappy":true}';

console.log(food);

const foodJSON = JSON.stringify(food);

console.log(foodJSON);

console.log(json);
const user = JSON.parse(json);
console.log(user);
console.log(user.name);

user.student = true;

console.log(user.student);

const dataJSON = "No soy un JSON";

try{
	const data = JSON.parse('{username": "Mango"}');
}catch (error){
	console.log(error);
	console.log(error.name);
	console.log(error.message);
}

console.log("✅ This is fine, we handled parse error in try...catch");
