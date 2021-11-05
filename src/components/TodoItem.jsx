import { Card, CloseButton } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../slicers/todosSlice'
import { formatterDate } from '../utils/constants'
export default function TodoItem({ todo }) {
	const dispatch = useDispatch()
	function handlerUpdate(e) {
		e.preventDefault()
		dispatch(updateTodo({ id: todo.id }))
	}
	return (
		<>
			<Card className="todo" border={todo.status ? 'success' : 'dark'} onContextMenu={handlerUpdate}>
				<Card.Body>
					<Card.Title className="d-flex justify-content-between">
						{todo.title}
						<CloseButton onClick={() => dispatch(deleteTodo({ id: todo.id }))} className="small" />
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{formatterDate.format(todo.id)}</Card.Subtitle>
					<Card.Text>{todo.description}</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}
