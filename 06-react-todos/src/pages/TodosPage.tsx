import ListGroup from 'react-bootstrap/ListGroup'
import PacmanLoader from 'react-spinners/PacmanLoader'
import TodoListItem from '../components/TodoListItem'
import TodoAPI from '../services/TodoAPI'
import { CreateTodoPayload, Todo } from '../services/TodoAPI.types'
import AddTodoForm from '../components/AddTodoForm'
import { useQuery } from '@tanstack/react-query'

const TodosPage = () => {
	const { data: todos, isLoading, refetch } = useQuery({
		queryKey: ["todos"],
		queryFn: TodoAPI.getTodos,
	});

	const createTodo = async (data: CreateTodoPayload) => {
		await TodoAPI.createTodo(data);

		// Re-fetch all todos
		refetch();
	}

	const deleteTodo = async (todo: Todo) => {
		await TodoAPI.deleteTodo(todo.id);

		// Re-fetch all todos
		refetch();
	}

	const editTodo = async (todo: Todo, newTitle: string) => {
		await TodoAPI.updateTodo(todo.id, { title: newTitle });

		// Re-fetch all todos
		refetch();
	}

	const toggleTodo = async (todo: Todo) => {
		await TodoAPI.updateTodo(todo.id, { completed: !todo.completed });

		// Re-fetch all todos
		refetch();
	}

	return (
		<>
			<h1 className="mb-3">Todos</h1>

			{/* Form should validate that a title is entered and at least 2 chars long, ONLY then should the parent's function for creating the todo be called */}
			<AddTodoForm onAddTodo={createTodo} />

			{/* <SuccessMessage heading="Such success">
				<p>Very good</p>
				<p>Much progress</p>
			</SuccessMessage> */}

			{isLoading && <PacmanLoader size={30} color="#f00" speedMultiplier={1.25} />}

			{todos && <ListGroup className="todolist">
				{todos.map(todo => (
					<TodoListItem
						key={todo.id}
						onDelete={deleteTodo}
						onEdit={editTodo}
						onToggle={toggleTodo}
						todo={todo}
					/>
				))}
			</ListGroup>}
		</>
	)
}

export default TodosPage
