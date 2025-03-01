import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/todoForm.jsx";
import TodoItem from "./components/todoItem";

function App() {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatedTodo = (id, todo) => {
    settodos(
      (prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))

      // we can write this function as in if else condion if we have problem to understand

      // prev.map((eachPrevTodo) => {
      //   if (eachPrevTodo.id === id) {
      //     todo;
      //   } else {
      //     eachPrevTodo;
      //   }
      // })
    );
  };

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const togleComplete = (id) => {
    settodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const localTodo = JSON.parse(localStorage.getItem("todos"));

    if (localTodo && localTodo.length > 0) {
      settodos(localTodo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, togleComplete, updatedTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
