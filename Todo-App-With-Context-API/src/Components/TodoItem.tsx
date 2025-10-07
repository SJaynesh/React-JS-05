
import { useTodo } from "../Context/TodoContent";
import TodoListCard from "./TodoListCard";

export default function TodoItem() {
    const { todos } = useTodo();

    if (!todos || todos.length === 0) {
        return (
            <div className="max-w-xl mx-auto mt-6 text-center text-gray-500">
                No todos yet — add your first todo ✨
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto mt-4 space-y-3">
            {todos.map((todo) => (
                <div key={todo.id}>
                    <TodoListCard {...todo} />
                </div>
            ))}
        </div>
    );
}
