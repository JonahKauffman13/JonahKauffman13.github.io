"use strict";

function addToBody(text){
	document.body.innerHTML += "<p>" + text + "</p>";
}

/*

console.log("test");

let yourName = prompt("What is your name?");

console.log("Hi "+yourName);
*/

let temperature = prompt("What is the temperature outside?");
temperature = Number(temperature)
if(temperature <= 32){
	addToBody("It's freezing! Stay Inside!");
}else if(temperature >= 80){
	addToBody("Go to the beach!");
}else{addToBody("Go for a walk");
}
addToBody("Have a nice day!");



