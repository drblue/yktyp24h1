import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Todo } from "../services/TodoAPI.types";

interface TodoListItemProps {
	onDelete: (todo: Todo) => Promise<void>;
	onEdit: (todo: Todo, newTitle: string) => Promise<void>;
	onToggle: (todo: Todo) => Promise<void>;
	todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ onDelete, onEdit, onToggle, todo }) => {
	const handleDeleteTodo = () => {
		// Ask user to confirm delete
		if (!confirm("U SURE BRO?!")) {
			return;
		}

		// Tell parent to delete the todo
		onDelete(todo);
	}

	const handleEditTodo = () => {
		const newTitle = prompt("Enter the new title", todo.title);

		// Ask user what the new title should be
		if (!newTitle) {
			return;
		}

		// Tell parent to update the todo
		onEdit(todo, newTitle);
	}

	const handleToggleTodo = () => {
		onToggle(todo);
	}

	return (
		<ListGroup.Item
			className={todo.completed ? "todo done" : "todo"}
		>
			<span className="todo-title">
				{todo.title}
			</span>
			<div className="todo-actions">
				<Button onClick={handleToggleTodo} variant="secondary">Toggle</Button>
				<Button onClick={handleEditTodo} variant="warning">Edit</Button>
				<Button onClick={handleDeleteTodo} variant="danger">Delete</Button>
			</div>
		</ListGroup.Item>
	)
}

export default TodoListItem;
