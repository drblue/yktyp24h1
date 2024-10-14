import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import PacmanLoader from 'react-spinners/PacmanLoader'
import TodoAPI from '../services/TodoAPI'
import { Todo } from '../services/TodoAPI.types'

const TodosPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [todos, setTodos] = useState<Todo[] | null>(null);

	// Fetch todos when component is being mounted
	useEffect(() => {
		const getTodos = async () => {
			const data = await TodoAPI.getTodos();
			setIsLoading(false);
			setTodos(data);
		}
		getTodos();
	}, []);

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			<p>Here be form</p>

			{isLoading && <PacmanLoader size={30} color="#f00" speedMultiplier={1.25} />}

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
