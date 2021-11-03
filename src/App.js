import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
	return (
		<Container>
			<Row>
				<Col className="d-flex align-items-center mb-3 flex-column">
					<AddTodo />
				</Col>
			</Row>
			<Row>
				<Col className="d-flex flex-wrap todos-box">
					<TodoList />
				</Col>
			</Row>
		</Container>
	)
}

export default App
