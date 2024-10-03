import { AxiosError } from "axios";
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

// Error Handler
const handleError = (err: unknown) => {
	if (err instanceof AxiosError) {
		alert("Network error, response code was: " + err.message);

	} else if (err instanceof Error) {
		alert("Something went wrong: " + err.message);

	} else {
		alert("Someone caused an error that should never have happend 😱");
	}
}

// Get todos from API and render them
const getTodosAndRender = async () => {
	try {
		// Get todos from server and update local copy
		todos = await getTodos();

		// Render dem todos
		renderTodos();

	} catch (err) {
		handleError(err);
	}
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

		try {
			// Update todo
			await updateTodo(clickedTodoId, {
				completed: !todo.completed,
			});

			// Get todos from API (which will include the newly created todo) and re-render the list
			getTodosAndRender();

		} catch (err) {
			handleError(err);
		}

	} else if (target.dataset.action === "delete") {
		// Delete all ze things!!111 💣
		console.log("Someone wants to watch the world burn:", e.target);

		// Find the todo id
		const clickedTodoId = Number(target.closest("li")?.dataset.todoId);

		try {
			// Delete todo
			await deleteTodo(clickedTodoId);

			// Get todos from API (which will include the newly created todo) and re-render the list
			getTodosAndRender();

		} catch (err) {
			handleError(err);
		}

	} else if (target.dataset.action === "edit") {
		// Edit todo

		// Find the todo id
		const clickedTodoId = Number(target.closest("li")?.dataset.todoId);

		// Find the todo with the correct ID
		const todo = todos.find(todo => todo.id === clickedTodoId);
		if (!todo) {
			return;
		}

		// Ask user about new title
		const title = prompt("What's the new title?", todo.title);
		if (!title) {
			return;
		}

		try {
			// Update todo
			await updateTodo(clickedTodoId, {
				title,
			});

			// Get todos from API (which will include the newly created todo) and re-render the list
			getTodosAndRender();

		} catch (err) {
			handleError(err);
		}
	}
});

/**
 * Listen for new todo form being submitted
 */
newTodoFormEl.addEventListener("submit", async (e) => {
	e.preventDefault();

	const newTodoTitleEl = document.querySelector<HTMLInputElement>("#new-todo-title")!;

	try {
		// Create the todo in the API (and wait for the request to be completed)
		await createTodo({
			title: newTodoTitleEl.value,
			completed: false,
		});

		// Get todos from API (which will include the newly created todo) and re-render the list
		getTodosAndRender();

	} catch (err) {
		handleError(err);
	}

	// Clear input field
	newTodoTitleEl.value = "";
});

// Get the todos from the API and *then* render initial list of todos
getTodosAndRender();
