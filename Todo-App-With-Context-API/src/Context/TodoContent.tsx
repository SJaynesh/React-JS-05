import { createContext, useContext, useEffect, useState } from "react";

export type TodoType = {
    id: number,
    todo: string,
    completed: boolean,
}

type TodoContentType = {
    todos: TodoType[]
    addTodo: (todo: string) => void,
    updateTodo: (id: number, todo: string) => void,
    deleteTodo: (id: number) => void,
    toggleCompleted: (id: number) => void,
}

// Create Context
const TodoContext = createContext<TodoContentType>({
    todos: [],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
    toggleCompleted: () => { },
});

// Custom Hook
export const useTodo = () => {
    return useContext(TodoContext);
}

// Context Providet
export const TodoProvider = ({ children }: any) => {

    const [todos, setTodos] = useState<TodoType[]>(JSON.parse(localStorage.getItem('todos') || '[]'));

    const addTodo = (todo: string) => {
        setTodos(prev => [...prev, { id: Date.now(), todo, completed: false }])
    }

    const updateTodo = (id: number, todo: string) => {
        setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? { ...prevTodo, todo } : prevTodo))
    }

    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(prevTodo => prevTodo.id !== id));
    }

    const toggleCompleted = (id: number,) => {
        setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])



    return <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}>
        {children}
    </TodoContext.Provider>
}