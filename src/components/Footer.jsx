import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer text-center text-white py-4">
      <div className="container">
        <h4 className="fw-bold mb-2"> Stay Organized, Stay Productive </h4>
        <p className="mb-3">
          Manage your daily tasks effortlessly with our To-Do App 🚀
        </p>
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white fs-4">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white fs-4">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:example@email.com" className="text-white fs-4">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
        <p className="small mb-0">
          © {new Date().getFullYear()} To-Do App | Crafted with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
