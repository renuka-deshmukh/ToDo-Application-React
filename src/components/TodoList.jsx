import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { TodoContext } from "../context/TodoContext";

const ToDoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [search, setSearch] = useState("");

  const filtureTodos = state.todos.filter(
    (todo) =>
      todo.name.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <input type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-3"
      />
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        ✅ My Tasks
      </h2>

      {filtureTodos.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No tasks yet! 🎉
        </p>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {filtureTodos.map((todo) => (
            <div
              key={todo.id}
              className="min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col justify-between"
            >
              <div>
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {todo.name}
                </h5>
                <p className="text-gray-600 mb-4">{todo.description}</p>
              </div>

              <div className="flex items-center justify-between mt-3">
                <span
                  className={`text-lg ${todo.isComplete ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {todo.isComplete ? "Completed ✅" : "Pending ❌"}
                </span>

                <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                    }
                    className="px-3 py-1 btn-warning hover:bg-warning-500 text-white rounded-lg shadow"
                  >
                    Toggle
                  </button>

                  <button
                    onClick={() =>
                      dispatch({ type: "DELETE_TODO", payload: todo.id })
                    }
                    className="px-3 py-1 btn-danger hover:bg-red-600 text-white rounded-lg shadow"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDoList;
