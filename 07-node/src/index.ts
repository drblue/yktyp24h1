import { writeFile, appendFile } from "node:fs/promises";

const msg: string = "Hello from the backend with types and watches!";

console.log(msg);
console.log("Hello from the otter side 🦦");
console.log("I NEEEDD COVFEFEFE!!!!!!!!!!!!!!!!!!!!!!!!!");

appendFile("lolcats.txt", "are funny since " + Date.now() + "\n");
