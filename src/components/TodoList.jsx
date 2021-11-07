import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
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
	return (
		<>
			<Row>
				<h1 className="mb-5 text-center">Your ToDo List</h1>
				<Col className="d-flex flex-wrap todos-box">
					{todos ? todos.map(todo => <TodoItem key={todo.id} todo={todo} />) : <h3>List is empty</h3>}
				</Col>
			</Row>
		</>
	)
}
