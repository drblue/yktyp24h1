/*
let myString = "Hello, world!";

let myNumber: number;
myNumber = 1337;

let myBoolean: boolean;
myBoolean = true;
*/

let myName: any = "Johan";
myName = 1337;
myName = null;
myName = [];

const greet = (name: string, age?: number) => {
	if (!age) {
		console.log(`Hello, ${name}!`);
		return;
	}

	console.log(`Hello, ${name}! You are ${age.toFixed()} years old.`);
}

greet("Johan", 42);
greet("Script-kiddo", 13.37);
greet("Pelle", 37);
