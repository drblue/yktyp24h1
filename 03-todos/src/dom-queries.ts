// 😈
// document.querySelector("h1")?.remove();

// 😰
const headingEl = document.querySelector("h4");
//     ^?
console.log("headingEl:", headingEl);
console.log("Heading content:", headingEl?.innerText);

// 😱 (I promise that this element exists 🤞🏻)
const paragraphEl = document.querySelector("p")!;
//     ^?
console.log("paragraphEl:", paragraphEl);
// console.log("Paragraph content:", paragraphEl.innerText);

// 🤩
const subheadingEl = document.querySelector("h2");
//     ^?
if (!subheadingEl) {
	throw new Error("I can't do stuff without my h2! 😢");
}
console.log("subheadingEl", subheadingEl);
console.log("Subheading content:", subheadingEl.innerText);

// 😊
const todosEl = document.querySelector("#todos") as HTMLUListElement;
//     ^?
console.log("todosEl", todosEl);
console.log("Todos content:", todosEl.innerText);
console.log(todosEl.innerText);

// 😁
const todos2El = document.querySelector<HTMLUListElement>("#todos");
//     ^?


console.log("🙌🏻 Look mom, no hands!");
