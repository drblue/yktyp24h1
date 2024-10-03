import { getTodos, createTodo } from "./api";
import type { Todo } from "./api.types";
import "./assets/scss/app.scss";

/**
 * Get references
 */

const todosEl = document.querySelector<HTMLUListElement>("#todos")!;
const newTodoFormEl = document.querySelector<HTMLFormElement>("#new-todo-form")!;
//     ^?

// Local variable containing all the todos from the server
let todos: Todo[] = [];

// Get todos from API and render them
const getTodosAndRender = async () => {
	// Get todos from server and update local copy
	todos = await getTodos();

	// Render dem todos
	renderTodos();
}

/**
 * Render todos to DOM
 */
const renderTodos = () => {
	todosEl.innerHTML = todos
		.map(todo =>
			`<li class="list-group-item d-flex justify-content-between align-items-center" data-todo-id="${todo.id}">
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
newTodoFormEl.addEventListener("submit", async (e) => {
	e.preventDefault();

	const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;
//      ^?

	// Create the todo in the API (and wait for the request to be completed)
	await createTodo({
		title: newTodoTitleEl.value,
		completed: false,
	});

	// Get todos from API (which will include the newly created todo) and re-render the list
	getTodosAndRender();

	// Clear input field
	newTodoTitleEl.value = "";

	console.log("GREAT SUCCESS!", todos);
});

// Get the todos from the API and *then* render initial list of todos
getTodosAndRender();
