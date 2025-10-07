import React, { useState } from "react";
import { useTodo } from "../Context/TodoContent";

export default function TodoForm() {
    const [todoTitle, setTodoTitle] = useState<string>("");
    const { addTodo } = useTodo();

    const add = (event: React.FormEvent) => {
        event.preventDefault();
        if (!todoTitle.trim()) return;
        addTodo(todoTitle.trim());
        setTodoTitle("");
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <form
                onSubmit={add}
                className="flex gap-3 items-center bg-white/60 backdrop-blur-md p-3 rounded-2xl shadow-md border border-gray-100"
                aria-label="Add todo"
            >
                <label htmlFor="todo-input" className="sr-only">Add todo</label>
                <input
                    id="todo-input"
                    type="text"
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                    placeholder="Add a new todo... (eg. Finish React task)"
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 placeholder:text-gray-400 text-gray-800"
                />

                <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700 active:scale-95 transition"
                >
                    {/* simple plus icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add
                </button>
            </form>
        </div>
    );
}
