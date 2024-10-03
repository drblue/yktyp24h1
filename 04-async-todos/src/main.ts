import { getTodos, createTodo, updateTodo, deleteTodo } from "./api";
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
					<button class="btn btn-secondary" data-action="edit">Edit</button>
					<button class="btn btn-danger" data-action="delete">Delete</button>
				</span>
			</li>`
		)
		.join("");
}

/**
 * Listne for clicks in the todo list
 */
todosEl.addEventListener("click", async (e) => {
	// Get event target and type it as HTMLElement
	const target = e.target as HTMLElement;

	if (target.tagName === "INPUT") {
		// Toggle todo

		// Find the todo id
		// const todoId = target.parentElement?.parentElement?.dataset.todoId;
		const clickedTodoId = Number(target.closest("li")?.dataset.todoId);

		// Find the todo with the correct ID
		const todo = todos.find(todo => todo.id === clickedTodoId);
		if (!todo) {
			return;
		}

		// Update todo
		await updateTodo(clickedTodoId, {
			completed: !todo.completed,
		});

		// Get todos from API (which will include the newly created todo) and re-render the list
		getTodosAndRender();

	} else if (target.dataset.action === "delete") {
		// Delete all ze things!!111 💣
		console.log("Someone wants to watch the world burn:", e.target);

		// Find the todo id
		const clickedTodoId = Number(target.closest("li")?.dataset.todoId);

		// Delete todo
		await deleteTodo(clickedTodoId);

		// Get todos from API (which will include the newly created todo) and re-render the list
		getTodosAndRender();

	}
});

/**
 * Listen for new todo form being submitted
 */
newTodoFormEl.addEventListener("submit", async (e) => {
	e.preventDefault();

	const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;

	// Create the todo in the API (and wait for the request to be completed)
	await createTodo({
		title: newTodoTitleEl.value,
		completed: false,
	});

	// Get todos from API (which will include the newly created todo) and re-render the list
	getTodosAndRender();

	// Clear input field
	newTodoTitleEl.value = "";
});

// Get the todos from the API and *then* render initial list of todos
getTodosAndRender();
