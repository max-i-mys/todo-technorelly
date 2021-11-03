import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

export default function TodoList() {
	const todos = useSelector(state => state.todos.todos)
	return <>{todos ? todos.map(todo => <TodoItem key={todo.id} todo={todo} />) : <h3>List is empty</h3>}</>
}
