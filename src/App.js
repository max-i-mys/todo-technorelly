import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import AddTodo from './components/AddTodo'

function App() {
	return (
		<Container>
			<Row>
				<Col className="d-flex align-items-center p-3 flex-column">
					<AddTodo />
				</Col>
			</Row>
		</Container>
	)
}

export default App
