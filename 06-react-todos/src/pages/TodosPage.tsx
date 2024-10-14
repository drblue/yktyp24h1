import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import TodoAPI from '../services/TodoAPI'
import { Todo } from '../services/TodoAPI.types'

const TodosPage = () => {
	const [todos, setTodos] = useState<Todo[] | null>(null);

	// Fetch todos when component is being mounted
	useEffect(() => {
		const getTodos = async () => {
			const data = await TodoAPI.getTodos();
			setTodos(data);
		}
		getTodos();
	}, []);

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<p>Here be form</p>

			{!todos && <p>Loading...</p>}

			{todos && <ListGroup className="todolist">
				{todos.map(todo => (
					<ListGroup.Item
						className={''}
						key={todo.id}
					>
						{todo.title}
					</ListGroup.Item>
				))}
			</ListGroup>}
		</>
	)
}

export default TodosPage
