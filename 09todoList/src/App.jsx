import { useState ,useEffect} from 'react'


import './App.css'
import { TodoContextProvider } from './Contexts/todoContext'
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function App() {
  const [todos,setTodos]=useState([]);
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    console.log(todo);
   
  }
  const editTodo=(id,todo)=>{
    setTodos((pre)=>pre.map((item)=>item.id===id?todo:prev))
  }
  const deleteTodo=(id)=>{
    setTodos((pre)=>pre.filter((item)=>item.id!==id));
  }
  const toggleTodo = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }
  useEffect(()=>{
    const todosLocalStorage=JSON.parse(localStorage.getItem('todos'));
    
    if (todos && todos.length > 0) {
      setTodos(todosLocalStorage)
    }

  },[])
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log("triggered");
  },[todos])
  return (
    <TodoContextProvider value={{todos,addTodo,editTodo,deleteTodo,toggleTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo)=><div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>)}
        </div>
      </div>
    </div>
    </TodoContextProvider>
  )
}

export default App
