import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { dispatch } = useContext(TodoContext);

  function handleSubmit(event) {
    event.preventDefault();

    try {
      if (!name.trim()) return;
      const payload = { name, description, startDate, endDate};
      dispatch({ type: "ADD_TODO", payload });
      setName("");
      setDescription("");
      setStartDate("");
      setEndDate("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="todo-container mt-5 mb-5">
      <h1 className="todo-title">📝 "Create Your Task"</h1>
      {/* <h3 className="todo-subtitle">Create New ToDo</h3> */}

      <form onSubmit={handleSubmit} className="todo-form mt-5">
        <div className="form-group">
          <label htmlFor="task">Add New Task</label>
          <input
            type="text"
            id="task"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter task name..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description of Task</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
            required
          />
        </div>
           <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">End Date</label>
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          </div>

        <button type="submit" className="btn-submit">
          ➕ Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
