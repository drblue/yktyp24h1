export type Todo = {
	id: number;
	title: string;
	completed: boolean;
}

export type CreateTodoPayload = {
	title: string;
	completed: boolean;
}
