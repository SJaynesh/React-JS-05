import React, { useState } from "react";
import { useTodo, type TodoType } from "../Context/TodoContent";

export default function TodoListCard({ id, todo, completed }: TodoType) {
    const { toggleCompleted, updateTodo, deleteTodo } = useTodo();

    const [editing, setEditing] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(todo);

    const startEdit = () => {
        if (completed) return; // don't allow editing completed task (optional)
        setEditing(true);
    };

    const saveEdit = () => {
        const trimmed = title.trim();
        if (!trimmed) {
            setTitle(todo); // reset
            setEditing(false);
            return;
        }
        updateTodo(id, trimmed);
        setEditing(false);
    };

    const cancelEdit = () => {
        setTitle(todo);
        setEditing(false);
    };

    return (
        <div
            className={`flex items-center gap-3 p-3 rounded-2xl bg-white shadow-sm border border-gray-100 transition
        ${completed ? "opacity-80" : ""}`}
            role="listitem"
        >
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleCompleted(id)}
                aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
                className="h-5 w-5 rounded-md accent-indigo-600 shrink-0"
            />

            <div className="flex-1 min-w-0">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={!editing}
                    readOnly={!editing}
                    className={`w-full bg-transparent text-gray-800 text-sm font-medium focus:outline-none
            ${completed ? "line-through text-gray-400" : "text-gray-900"}
            ${editing ? "border-b border-indigo-200 pb-1" : ""}`}
                    aria-label="Todo title"
                />
                <p className="text-xs text-gray-400 mt-1">
                    {completed ? "Completed" : editing ? "Editing…" : "Pending"}
                </p>
            </div>

            <div className="flex items-center gap-2">
                {!editing ? (
                    <>
                        <button
                            onClick={startEdit}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-200 text-sm hover:bg-gray-50 active:scale-95 transition"
                            title="Edit"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6 6L21 11l-6-6L9 11z" />
                            </svg>
                            Edit
                        </button>

                        <button
                            onClick={() => deleteTodo(id)}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 text-sm hover:bg-red-100 active:scale-95 transition"
                            title="Delete"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 7h12M9 7v10m6-10v10M5 7h14l-1 12a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7z" />
                            </svg>
                            Delete
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={saveEdit}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 active:scale-95 transition"
                            title="Save"
                        >
                            Save
                        </button>

                        <button
                            onClick={cancelEdit}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-200 text-sm hover:bg-gray-50 active:scale-95 transition"
                            title="Cancel"
                        >
                            Cancel
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
