/**
 * All communication with the backend REST API `json-server’
 */
import axios from "axios";
import type { Todo } from "./api.types";

const baseUrl = import.meta.env.VITE_API_BASEURL as string;

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
