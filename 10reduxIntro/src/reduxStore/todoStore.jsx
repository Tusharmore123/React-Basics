import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../todoReducer/todoReducer'
export const TodoStore=configureStore({
reducer:todoReducer
})
