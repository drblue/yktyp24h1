export type Todo = {
	id: number;
	title: string;
	completed: boolean;
	deadline?: number;
	[key: string]: any;  // index signature
}

// 🥴
// export type CreateTodoPayload = {
// 	title: string;
// 	completed: boolean;
// }

// 😎
export type CreateTodoPayload = Omit<Todo, "id">;  // Example: Omit<Todo, "id" | "title">

// 🥴
// export type UpdateTodoPayload = {
// 	id?: number;
// 	title?: string;
// 	completed?: boolean;
// }

// 😎
export type UpdateTodoPayload = Partial<Todo>;

const fakedTodo: Todo = {
	id: 1337,
	title: "My fake todo",
	completed: false,
	project_manager: "Bob",
}

const secondFakedTodo: Todo = {
	id: 1337,
	title: "My fake todo",
	completed: false,
	client_id: 42,
}
