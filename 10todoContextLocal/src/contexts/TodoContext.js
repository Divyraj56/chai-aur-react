import {createContext, useContext} from "react"
// step 1 - import create and use context
// step 2 - "Pehle Context Create Karo" , "Fir Usko Use Karo"
// step 3 - Give a Provider 
// step 4 - wrap app.jsx with provider , with values that will be provided
// step 5 - give functionality to the created context in app.jsx 

export const TodoContext = createContext({
    todo:[{
        id: 1,
        todo: "Learn React",
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id ,todo) => {},
    deleteTodo: (id) => {},
    toggeleComplete: (id) => {}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider