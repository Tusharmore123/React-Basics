import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { TodoStore } from './reduxStore/todoStore.jsx'
import TodoForm from './Components/todoForm.jsx'
import TodoItem from './Components/todoItems.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={TodoStore}>
   <TodoForm/>
   <TodoItem/>
  </Provider>
)
