
import TodoForm from "./Components/TodoForm";
import { TodoProvider } from "./Context/TodoContent";
import TodoItem from "./Components/TodoItem";

export default function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6 md:p-8">
          {/* App Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-6">
            My Todo App ✨
          </h1>

          {/* Todo Form */}
          <TodoForm />

          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Todo List */}
          <TodoItem />
        </div>
      </div>
    </TodoProvider>
  );
}
