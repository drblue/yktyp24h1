import { Todo } from "./api.types";

/**
 * Generic type that accepts a type argument for typing of `data`
 */
export type Response<T> = {
	status: "success" | "fail" | "error";
	data: T,
	message: string;
}

// Generates a new type where `data` is typed as `Todo[]`
export type TodosResponse = Response<Todo[]>;

// Generates a new type where `data` is typed as `Todo`
export type TodoResponse = Response<Todo>;

// const response1: TodosResponse = {
// 	status: "success",
// 	data: [],
// }
