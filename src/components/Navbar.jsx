import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import custom CSS

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-brand">✨ ToDo'S</div>

      <ul className="navbar-links">
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li>
          <Link to="/createTask">➕ Add Task</Link>
        </li>
        <li>
          <Link to="/taskList">📋 Task List</Link>
        </li>
        <li>
          <Link to="/about">ℹ️ About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
