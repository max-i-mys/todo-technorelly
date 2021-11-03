import { Card } from 'react-bootstrap'
import { formatterDate } from '../utils/constants'
export default function TodoItem({ todo }) {
	return (
		<>
			<Card className="todo">
				<Card.Body>
					<Card.Title>{todo.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{formatterDate.format(todo.id)}</Card.Subtitle>
					<Card.Text>{todo.description}</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}
