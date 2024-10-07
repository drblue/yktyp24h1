/**
 * All communication with the backend REST API `json-server’
 */
import axios from "axios";
import type { CreateTodoPayload, Todo, UpdateTodoPayload } from "./api.types";

const baseURL = import.meta.env.VITE_API_BASEURL as string || "http://localhost:3000";

// Create a new axios instance
const instance = axios.create({
	baseURL,
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

/**
 * Get todos from API using fetch
 */
export const getTodosFetch = async () => {
	const response = await fetch(baseURL + "/todos");    // http://localhost:3000/todos
//         ^?

	if (!response.ok) {
		throw new Error("Response was not OK!");
	}

	const data: Todo[] = await response.json();
//        ^?

	// if (!data.length) {
	// 	throw new Error("No todos!");
	// }

	return data;
}

/**
 * Get todos from API using axios
 */
export const getTodos = async () => {
	const response = await instance.get<Todo[]>("/todos");

	return response.data;
}

/**
 * Create a new todo in the API
 */
export const createTodo = async (data: CreateTodoPayload) => {
	// Send a POST-request to http://localhost:3000/todos with the contents of `todo` as body
	const response = await instance.post<Todo>("/todos", data);
	return response.data;
}

/**
 * Update a todo in the API
 */
export const updateTodo = async (id: number, data: UpdateTodoPayload) => {
	// Send a PATCH-request to http://localhost:3000/todos/:id with the contents of `data` as body
	const response = await instance.patch<Todo>("/todos/" + id, data);
	return response.data;
}

/**
 * Delete a todo in the API
 */
export const deleteTodo = async (id: number) => {
	// Send a DELETE-request to http://localhost:3000/todos/:id
	await instance.delete("/todos/" + id);
	return true;
}
