import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialTodo } from '../slicers/todosSlice'
import TodoItem from './TodoItem'

export default function TodoList() {
	const dispatch = useDispatch()
	const todos = useSelector(state => state.todos.todos)
	useEffect(() => {
		if (!localStorage.getItem('todos')) {
			localStorage.setItem('todos', JSON.stringify([]))
		} else {
			dispatch(initialTodo(JSON.parse(localStorage.getItem('todos'))))
		}
	}, [])
	return <>{todos ? todos.map(todo => <TodoItem key={todo.id} todo={todo} />) : <h3>List is empty</h3>}</>
}
