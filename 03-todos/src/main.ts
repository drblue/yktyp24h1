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

// Get JSON of Todos from LocalStorage
const json = localStorage.getItem("todos") || "[]";
//     ^?

const todos: Todo[] = JSON.parse(json);

// Save todos to LocalStorage
const saveTodos = () => {
	// Convert todos-array to JSON
	const json = JSON.stringify(todos);

	// Save JSON to localStorage
	localStorage.setItem("todos", json);
}

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

	// Save todos 🛟
	saveTodos();

	// Re-render todos
	renderTodos();

	console.log("GREAT SUCCESS!", todos);
});

// Render initial list of todos
renderTodos();
