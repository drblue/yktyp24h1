/**
 * All communication with the backend REST API `json-server’
 */
import axios from "axios";
import type { CreateTodoPayload, Todo } from "./api.types";

const baseUrl = import.meta.env.VITE_API_BASEURL as string || "http://localhost:3000";

/**
 * Get todos from API using fetch
 */
export const getTodosFetch = async () => {
	const response = await fetch(baseUrl + "/todos");    // http://localhost:3000/todos
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
	const response = await axios.get<Todo[]>(baseUrl + "/todos");
	return response.data;
}

/**
 * Create a new todo in the API
 *
 * @param todo
 */
export const createTodo = async (todo: CreateTodoPayload) => {
	// Send a POST-request to http://localhost:3000/todos with the contents of `todo` as body
	const response = await axios.post<Todo>(baseUrl + "/todos", todo);
	return response.data;
}
