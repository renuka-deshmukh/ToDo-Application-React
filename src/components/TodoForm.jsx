import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch } = useContext(TodoContext);

  function handleSubmit(event) {
    event.preventDefault();
    try {
      if (!name.trim()) return; // prevent empty task
      const payload = { name, description };
      dispatch({ type: "ADD_TODO", payload });
      setName("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-8 rounded-2xl shadow-lg mt-6">
      <h1 className="text-center text-3xl font-bold text-indigo-900 mb-4 drop-shadow">
        ✨ To Do Application
      </h1>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Create New ToDo
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Task Input */}
        <div>
          <label
            htmlFor="task"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Add new Task
          </label>
          <input
            type="text"
            id="task"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm"
            placeholder="Enter task name..."
          />
        </div>

        {/* Description Input */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description of Task
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-sm"
            placeholder="Enter task description..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 rounded-lg shadow-md hover:scale-105 transition duration-200 font-semibold"
        >
          ➕ Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
