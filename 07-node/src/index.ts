import { writeFile, appendFile } from "node:fs/promises";

const msg: string = "Hello from the backend with types";

console.log(msg);
console.log("Hello from the otter side 🦦");

appendFile("lolcats.txt", "are funny since " + Date.now() + "\n");
