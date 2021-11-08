import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {
		initialTodo: (state, action) => {
			state.todos = [...action.payload]
		},
		addTodo: (state, action) => {
			state.todos.unshift(action.payload)
			addToLocalStorage('todos', state.todos)
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
			addToLocalStorage('todos', state.todos)
		},
		updateTodo: (state, action) => {
			const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
			state.todos[todoIndex].status = !state.todos[todoIndex].status
			addToLocalStorage('todos', state.todos)
		},
	},
})

export default todosSlice.reducer

export const { initialTodo, addTodo, deleteTodo, updateTodo } = todosSlice.actions

function addToLocalStorage(name, data) {
	localStorage.setItem(name, JSON.stringify(data))
}
