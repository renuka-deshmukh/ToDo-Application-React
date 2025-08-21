import React from "react";
import TodoList from "../components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-light py-5 shadow-sm mb-4">
        <div className="container text-center">
          <h1 className="display-4 fw-bold text-success mb-3">
            ✨ To Do Application ✨
          </h1>
          <p className="lead text-muted">
            Organize your tasks, stay productive, and achieve your goals! 🚀
          </p>
          <hr className="w-25 mx-auto my-4" />
          <div className="d-flex justify-content-center gap-3">
            <span className="badge bg-primary fs-6">#Productivity</span>
            <span className="badge bg-warning text-dark fs-6">#Focus</span>
            <span className="badge bg-success fs-6">#Success</span>
          </div>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="container mb-5">
        <div className="alert alert-info text-center shadow-sm">
          <i className="bi bi-lightbulb-fill me-2"></i>
          <strong>"Small steps every day lead to big achievements!"</strong>
        </div>
      </div>

      {/* Task List Section */}
      <div className="container">
        <h2 className="text-center text-dark mb-4">
          <i className="bi bi-list-check text-success me-2"></i>
          Your Tasks
        </h2>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
