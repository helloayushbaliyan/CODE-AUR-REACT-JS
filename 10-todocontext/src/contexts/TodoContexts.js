import { useContext, createContext } from "react";


export const TodoContexts = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updatedTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    togleComplete: (id) => { },

})


export const TodoProvider = TodoContexts.Provider

export const useTodo = () => {
    return useContext(TodoContexts)
}

