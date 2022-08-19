const settings = { 
	theme: "dark",
	isAuthenticated: true,
	options: [1,2,3], 
};

const food = {
	name: "clamchowder",
	price: 300,
	availability: true,
	allergy: "seafood",
};

localStorage.setItem("settings", JSON.stringify(settings));
localStorage.setItem("food", JSON.stringify(food));

const theme = localStorage.getItem("settings");

const themeObj = JSON.parse(theme);

console.log(themeObj.theme);

console.log(localStorage.getItem("food"));

/*localStorage.removeItem("settings");

console.log(localStorage.getItem("settings"));

localStorage.clear();

console.log(localStorage.getItem("food"));

console.log(localStorage.getItem("settings"));
*/
const form = document.querySelector("#message-form");
const output = document.querySelector("#output");

const KEY = "message";

updateOutput();

form.addEventListener("submit", saveMessage);

function saveMessage(evt){
	evt.preventDefault();
	localStorage.setItem(KEY, form.elements.message.value);
	updateOutput();
	form.reset();
}

function updateOutput() {
	output.textContent = localStorage.getItem(KEY || "");
}

