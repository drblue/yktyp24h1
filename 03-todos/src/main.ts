import "./assets/scss/app.scss";

/**
 * Get references
 */

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;
//     ^?

/**
 * Initial state
 */
type Todo = {
	title: string;
	completed: boolean;
}

const todos: Todo[] = [
	{ title: "🤓 Learn about TypeScript", completed: true },
	{ title: "😇 Take over the world", completed: false },
	{ title: "💰 Profit", completed: false },
];

/**
 * Render todos to DOM
 */
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map(todo =>
			`<li class="list-group-item d-flex justify-content-between align-items-center">
				<span class="todo-item">
					<input type="checkbox" class="me-2" ${todo.completed ? "checked" : ""} />
					<span class="todo-title">${todo.title}</span>
				</span>
				<span class="todo-actions">
					<button class="btn btn-warning">Edit</button>
					<button class="btn btn-danger">Delete</button>
				</span>
			</li>`
		)
		.join("");
}

/**
 * Listen for new todo form being submitted
 */
newTodoFormEl.addEventListener("submit", (e) => {
	e.preventDefault();

	const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;
//      ^?

	// PUSH! 🫸🏻
	todos.push({
		title: newTodoTitleEl.value,
		completed: false
	});

	// Clear input field
	newTodoTitleEl.value = "";

	// Re-render todos
	renderTodos();

	console.log("GREAT SUCCESS!", todos);
});

// Render initial list of todos
renderTodos();
