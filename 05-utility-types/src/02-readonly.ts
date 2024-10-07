type Todo = {
	id: number;
	title: string;
	completed: boolean;
}

type BetterTodo = {
	readonly id: number;
	title: string;
	completed: boolean;
}

const todo1: BetterTodo = {
	id: 42,
	title: "My first todo",
	completed: false,
}

// todo1.id = 1337;  // Not allowed as "id" is readonly
todo1.title = "My VERY first todo";
