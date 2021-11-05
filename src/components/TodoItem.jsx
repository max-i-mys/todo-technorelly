import { Card, CloseButton, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../slicers/todosSlice'
import { formatterDate } from '../utils/constants'
export default function TodoItem({ todo }) {
	const dispatch = useDispatch()
	return (
		<>
			<Card className={`todo ${todo.status ? '' : 'finished'}`} border={todo.status ? 'success' : 'danger'}>
				<Card.Body>
					<Card.Title className="d-flex justify-content-between">
						{todo.title}
						<CloseButton onClick={() => dispatch(deleteTodo({ id: todo.id }))} className="small" />
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{formatterDate.format(todo.id)}</Card.Subtitle>
					<Card.Text>{todo.description}</Card.Text>
				</Card.Body>
				<Form.Check
					onClick={() => dispatch(updateTodo({ id: todo.id }))}
					type="checkbox"
					label="finished"
					className="m-2"
					defaultChecked={todo.status ? false : true}
				/>
			</Card>
		</>
	)
}
