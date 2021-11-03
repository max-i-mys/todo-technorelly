import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../slicers/todosSlice'

export const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
})
