import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center text-primary mb-4">
        About This Application
      </h1>

      <div className="card shadow-lg p-4 border-0 rounded-3">
        <div className="card-body">
          <h5 className="card-title text-success">📌 Stay Organized, Stay Productive</h5>
          <p className="card-text text-muted">
            This To-Do application is designed to help you stay on top of your 
            daily tasks and goals. Whether it's work, studies, or personal 
            activities, this app makes it easy to keep track of everything 
            in one place.  
            You can <b>add new tasks, mark them as completed, filter them by status, and 
            remove tasks you no longer need</b> — ensuring you stay organized and focused.
          </p>

          <hr />

          <h5 className="mt-3 text-info">✨ Key Features</h5>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">✅ Add and manage tasks effortlessly</li>
            <li className="list-group-item">🔍 Search and filter tasks quickly</li>
            <li className="list-group-item">📊 View completed & pending tasks clearly</li>
            <li className="list-group-item">🎯 Boost productivity by staying organized</li>
          </ul>

          <p className="mt-3 text-muted">
            This app acts as your personal task manager, helping you achieve more 
            every day with less stress. Simple, fast, and effective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
