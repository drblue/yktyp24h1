import ListGroup from "react-bootstrap/ListGroup";
import { Todo } from "../services/TodoAPI.types";

interface TodoListItemProps {
	todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
	return (
		<ListGroup.Item
			className={''}
		>
			{todo.title}
		</ListGroup.Item>
	)
}

export default TodoListItem;
