import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import PacmanLoader from 'react-spinners/PacmanLoader'
import TodoListItem from '../components/TodoListItem'
import TodoAPI from '../services/TodoAPI'
import { Todo } from '../services/TodoAPI.types'
import SuccessMessage from '../components/SuccessMessage'

const TodosPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [todos, setTodos] = useState<Todo[] | null>(null);

	const getTodos = async () => {
		// reset initial state
		setIsLoading(true);

		const data = await TodoAPI.getTodos();
		setIsLoading(false);
		setTodos(data);
	}

	const toggleTodo = async (todo: Todo) => {
		await TodoAPI.updateTodo(todo.id, { completed: !todo.completed });

		// Re-fetch all todos
		getTodos();
	}

	// Fetch todos when component is being mounted
	useEffect(() => {
		getTodos();
	}, []);

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			{/* Form should validate that a title is entered and at least 2 chars long, ONLY then should the parent's function for creating the todo be called */}
			{/* <AddTodoForm onAddTodo={createTodo} /> */}

			<SuccessMessage heading="Such success">
				<p>Very good</p>
				<p>Much progress</p>
			</SuccessMessage>

			{isLoading && <PacmanLoader size={30} color="#f00" speedMultiplier={1.25} />}

			{todos && <ListGroup className="todolist">
				{todos.map(todo => (
					<TodoListItem
						key={todo.id}
						onToggle={toggleTodo}
						todo={todo}
					/>
				))}
			</ListGroup>}
		</>
	)
}

export default TodosPage
