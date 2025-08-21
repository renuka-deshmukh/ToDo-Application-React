import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import "./ToDoList.css"; // custom CSS

const ToDoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Filtering logic
  const filteredTodos = state.todos.filter((todo) => {
    const matchesSearch =
      todo.name.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase());

    if (filter === "completed") return matchesSearch && todo.isComplete;
    if (filter === "incomplete") return matchesSearch && !todo.isComplete;
    return matchesSearch;
  });

  return (

    <div className="todo-container mb-5">
      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Title */}
      <h2 className="title">✅ My Tasks</h2>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      {/* Tasks */}
      {filteredTodos.length === 0 ? (
        <p className="empty-text">No tasks yet! 🎉</p>
      ) : (
        <div className="task-list">
          {filteredTodos.map((todo) => (
            <div key={todo.id} className="task-card">
              <div>
                <h5 className="task-title">{todo.name}</h5>
                <p className="task-desc">{todo.description}</p>
                 <p>
                <strong>Start:</strong> {todo.startDate}
              </p>
              <p>
                <strong>End:</strong> {todo.endDate}
              </p>
              </div>

              <div className="task-footer">
                <span
                  className={`status ${todo.isComplete ? "status-done" : "status-pending"
                    }`}
                >
                  {todo.isComplete ? "Completed ✅" : "Pending ❌"}
                </span>

                <div className="btn-group">
                  <button
                    onClick={() =>
                      dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                    }
                    className="btn btn-toggle"
                  >
                    Toggle
                  </button>

                  <button
                    onClick={() =>
                      dispatch({ type: "DELETE_TODO", payload: todo.id })
                    }
                    className="btn btn-delete"
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
