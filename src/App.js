import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import HeaderMenu from './components/HeaderMenu'
import { Route, Routes } from 'react-router'
import PageStub from './components/PageStub'

function App() {
	return (
		<Container>
			<HeaderMenu />
			<Routes>
				<Route path="/add" element={<AddTodo />}></Route>
				<Route path="/" element={<TodoList />}></Route>
				<Route path="*" element={<PageStub />}></Route>
			</Routes>
		</Container>
	)
}

export default App
