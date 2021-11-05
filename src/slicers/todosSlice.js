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
			state.todos.push(action.payload)
			localStorage.setItem('todos', JSON.stringify(state.todos))
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
			localStorage.setItem('todos', JSON.stringify(state.todos))
		},
	},
})

export default todosSlice.reducer

export const { initialTodo, addTodo, deleteTodo } = todosSlice.actions
