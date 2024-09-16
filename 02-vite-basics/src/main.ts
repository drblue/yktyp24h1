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

// Arrays (implicit typing)
const pets = ["cat", "dog", "hamster"];
       // ^?
pets.forEach((pet) => {
	console.log(pet.toLocaleUpperCase());
});

// const ages = [2, 4, 1, 3, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5];
// ages.forEach((age) => {
// 	console.log(age.toLocaleUpperCase());	// Error: Property 'toLocaleUpperCase' does not exist on type 'number'.ts(2339)
// });

// Arrays (explicit typing)
const names: string[] = [];
//      ^?
names.push("Alice");
// names.push(42);
// names.push(true);
console.log(names);

const ages: number[] = [];
ages.push(1337);
// ages.push("tretton37");
console.log(ages);

// const printCoords = ( point: { x: number, y: number } ) => {
// 	console.log(`x=${point.x}, y=${point.y}`);
// }

type Point = {
	x: number;
	y: number;
	z?: number;
}

const printCoords = ( point: Point ) => {
	// Type Narrowing
	if (typeof point.z === "undefined") {
		console.log(`x=${point.x}, y=${point.y.toFixed()}`);
		return;
	}

	console.log(`x=${point.x}, y=${point.y.toFixed()}, z=${point.z.toFixed()}`);
}

const myPoint: Point = { x: 42, y: 1337 }

const myCoords1 = { x: 42, y: 1337 };

// printCoords("LOL");
printCoords(myPoint);
printCoords(myCoords1);
printCoords( { x: 42, y: 1337, z: -1 } );
