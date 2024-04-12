import{createContext,useContext} from 'react'



export const todoContext=createContext({
    todos:[
        {
            id:1,
            todoMsg:"This is some text",
            completed:false
        }],
        addTodo:(todo)=>{},
        editTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleTodo:(id)=>{}
    
    }

);//setting the default values for the context



export const TodoContextProvider=todoContext.Provider;
export const useTodo=()=>{
    return useContext(todoContext);
}