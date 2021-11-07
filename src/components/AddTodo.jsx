import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slicers/todosSlice'

export default function AddTodo() {
	const [titleValue, setTitleValue] = useState(null)
	const [descValue, setDescValue] = useState(null)
	const dispatch = useDispatch()

	function handlerAdd(e) {
		e.preventDefault()
		if (titleValue && descValue) {
			const newTodo = {
				id: Date.now(),
				title: titleValue,
				description: descValue,
				status: true,
			}
			dispatch(addTodo(newTodo))
			e.target.reset()
		}
	}

	return (
		<>
			<Row>
				<Col className="d-flex align-items-center mb-3 flex-column">
					<h1>Add ToDo</h1>
					<Form onSubmit={handlerAdd} className="w-50">
						<Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
							<Form.Label>Title</Form.Label>
							<Form.Control
								onChange={e => setTitleValue(e.target.value)}
								type="text"
								placeholder="task name"
								required
							/>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1" className="pb-3">
							<Form.Label>Describe</Form.Label>
							<Form.Control
								onChange={e => setDescValue(e.target.value)}
								as="textarea"
								placeholder="task describe"
								rows={3}
								required
							/>
						</Form.Group>
						<Button variant="outline-success" type="submit">
							Add new task
						</Button>
					</Form>
				</Col>
			</Row>
		</>
	)
}
