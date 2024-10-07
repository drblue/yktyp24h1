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
 * Make a generic HTTP GET Request
 *
 * @param endpoint Endpoint to get
 * @returns
 */
const get = async <T = any>(endpoint: string) => {
	const response = await instance.get<T>(endpoint);
	return response.data;
}

/**
 * Make a generic HTTP POST Request
 *
 * @param endpoint Endpoint to get
 * @returns
 */
const post = async <Response, Payload>(endpoint: string, data: Payload) => {
	const response = await instance.post<Response>(endpoint, data);
	return response.data;
}

/**
 * Get todos from API using axios
 */
export const getTodos = async () => {
	return get<Todo[]>("/todos");
}

/**
 * Get todo from API using axios
 */
export const getTodo = async (id: number) => {
	return get("/todos/" + id);
}

/**
 * Create a new todo in the API
 */
export const createTodo = async (data: CreateTodoPayload) => {
	return post<Todo, CreateTodoPayload>("/todos", data);
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
