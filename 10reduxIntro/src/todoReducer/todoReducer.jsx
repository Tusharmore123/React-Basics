import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[{
        id:nanoid(),
        text:'your first todo'
    }],
    
}

export const todosSlice=createSlice({
    name:"todos",//name for your reducer
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
}


)
export default todosSlice.reducer;
export const {addTodo, removeTodo} = todosSlice.actions