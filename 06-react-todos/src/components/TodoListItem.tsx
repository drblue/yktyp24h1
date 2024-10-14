import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Todo } from "../services/TodoAPI.types";

interface TodoListItemProps {
	onToggle: (todo: Todo) => Promise<void>;
	todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ onToggle, todo }) => {
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
				<Button variant="warning">Edit</Button>
				<Button variant="danger">Delete</Button>
			</div>
		</ListGroup.Item>
	)
}

export default TodoListItem;
