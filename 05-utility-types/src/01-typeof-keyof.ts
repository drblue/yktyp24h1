export {};

// const username = "johan";
//     ^?

let username = "johan";
//   ^?

// Generate a type from the type of `username`
type TypeOfUsername = typeof username;

const user = {
	username: "johan",
	role: "meme-lord",
	level: 1337,
}

// Extract the type from an object
type User = typeof user;

type Car = {
	make: string,
	model: string,
	year: number,
}

// Extract the keys of a type as a union
type CarKeys = keyof Car;  // CarKeys will be of type `"make" | "model" | "year"`

// Extract the keys from an object
// type UserKeys = keyof User;
type UserKeys = keyof typeof user;
