import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoslice";

export default function Todo(props) {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="w-full">
          <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
          >
            {/* <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
            /> */}
            <div className=" w-full bg-transparent rounded-lg">
              {todo.text}
            </div>

            {/* Edit, Save Button */}
            {/* <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                if (todo.completed) return;

                if (isTodoEditable) {
                  editTodo();
                } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
            >
              {isTodoEditable ? "📁" : "✏️"}
            </button> */}
            {/* Delete Todo Button */}

            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
