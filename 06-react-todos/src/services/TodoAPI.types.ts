export type Todo = {
	id: number;
	title: string;
	completed: boolean;
	deadline?: number;
}

export type CreateTodoPayload = Omit<Todo, "id">;  // Example: Omit<Todo, "id" | "title">
export type TodoIdTitle = Pick<Todo, "id" | "title">;

export type UpdateTodoPayload = Partial<Todo>;
export type RequiredTodoPayload = Required<Todo>;
