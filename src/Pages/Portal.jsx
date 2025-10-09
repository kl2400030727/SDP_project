import React from "react";
import { useNavigate } from "react-router-dom";
import "./Portal.css";

export default function Portal() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Student";
  const userRole = localStorage.getItem("userRole") || "student";

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    navigate("/");
  };

  // Updated courses with new names
  const myCourses = [
    {
      id: 1,
      title: "Database Management System",
      description: "Learn about database design, SQL, normalization, and database administration.",
      instructor: "Dr. Sarah Chen",
      provider: "Amazon",
      rating: 4,
      progress: 75
    },
    {
      id: 2,
      title: "Artificial Intelligence and Machine Learning",
      description: "Explore AI algorithms, neural networks, and machine learning models.",
      instructor: "Prof. Michael Rodriguez",
      provider: "Google",
      rating: 5,
      progress: 40
    },
    {
      id: 3,
      title: "Object Oriented Programming",
      description: "Master OOP concepts, design patterns, and software development principles.",
      instructor: "Dr. James Wilson",
      provider: "Microsoft",
      rating: 4,
      progress: 60
    },
    {
      id: 4,
      title: "Probability and Statistics",
      description: "Understand statistical analysis, probability theory, and data interpretation.",
      instructor: "Dr. Emily Parker",
      provider: "Stanford",
      rating: 4,
      progress: 30
    },
    {
      id: 5,
      title: "Operating System",
      description: "Learn about process management, memory allocation, and system architecture.",
      instructor: "Prof. Robert Brown",
      provider: "MIT",
      rating: 5,
      progress: 85
    },
    {
      id: 6,
      title: "Frontend Development",
      description: "Build modern web applications using React, HTML, CSS, and JavaScript.",
      instructor: "Jessica Lee",
      provider: "Meta",
      rating: 4,
      progress: 90
    },
    {
      id: 7,
      title: "Open Source Engineering",
      description: "Contribute to open source projects and learn collaborative development.",
      instructor: "David Kim",
      provider: "GitHub",
      rating: 4,
      progress: 25
    }
  ];

  const availableQuizzes = [
    { id: 1, title: "JavaScript Basics", dueDate: "2024-12-25", duration: "30 min" },
    { id: 2, title: "CSS Advanced", dueDate: "2024-12-28", duration: "45 min" },
    { id: 3, title: "React Fundamentals", dueDate: "2024-12-30", duration: "60 min" }
  ];

  const assignments = [
    { id: 1, title: "Project Proposal", dueDate: "2024-12-20", status: "Pending" },
    { id: 2, title: "Research Paper", dueDate: "2024-12-22", status: "Submitted" },
    { id: 3, title: "Final Project", dueDate: "2024-12-31", status: "Pending" }
  ];

  return (
    <div className="portal-container">
      {/* Header */}
      <header className="portal-header">
        <div className="header-content">
          <h1>Learning Management System</h1>
          <div className="user-info">
            <span>Welcome, {username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <div className="portal-main">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul>
              <li>Programming</li>
              <li>Database</li>
              <li>AI/ML</li>
              <li>Mathematics</li>
              <li>Systems</li>
              <li>Development</li>
            </ul>
          </div>

          {/* Removed Price Section */}

          <div className="sidebar-section">
            <h3>Level</h3>
            <ul>
              <li>R-mode</li>
              <li>A-mode</li>
              <li>E-mode</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h2>Welcome back, {username}!</h2>
            <p>Continue your learning journey</p>
          </section>

          {/* My Courses Section */}
          <section className="courses-section">
            <div className="section-header">
              <h3>My Courses</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="courses-grid">
              {myCourses.map(course => (
                <div key={course.id} className="course-card">
                  <div className="course-image">
                    <div className="course-provider">{course.provider}</div>
                  </div>
                  <div className="course-content">
                    <h4>{course.title}</h4>
                    <p>{course.description}</p>
                    <div className="course-instructor">
                      <span>{course.instructor}</span>
                    </div>
                    <div className="course-rating">
                      {"★".repeat(course.rating)}{"☆".repeat(5 - course.rating)}
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="progress-text">{course.progress}% Complete</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Stats Section */}
          <section className="stats-section">
            <div className="stat-card">
              <h4>My Courses</h4>
              <div className="stat-number">7</div>
            </div>
            <div className="stat-card">
              <h4>Assignments</h4>
              <div className="stat-number">5</div>
            </div>
            <div className="stat-card">
              <h4>Quizzes</h4>
              <div className="stat-number">8</div>
            </div>
            <div className="stat-card">
              <h4>Progress</h4>
              <div className="stat-number">58%</div>
            </div>
          </section>

          {/* Quizzes and Assignments Section */}
          <div className="bottom-sections">
            <section className="quizzes-section">
              <div className="section-header">
                <h3>Available Quizzes</h3>
              </div>
              <div className="quizzes-list">
                {availableQuizzes.map(quiz => (
                  <div key={quiz.id} className="quiz-item">
                    <h5>{quiz.title}</h5>
                    <div className="quiz-details">
                      <span>Due: {quiz.dueDate}</span>
                      <span>{quiz.duration}</span>
                    </div>
                    <button className="start-btn">Start Quiz</button>
                  </div>
                ))}
              </div>
            </section>

            <section className="assignments-section">
              <div className="section-header">
                <h3>Assignments</h3>
              </div>
              <div className="assignments-list">
                {assignments.map(assignment => (
                  <div key={assignment.id} className="assignment-item">
                    <h5>{assignment.title}</h5>
                    <div className="assignment-details">
                      <span>Due: {assignment.dueDate}</span>
                      <span className={`status ${assignment.status.toLowerCase()}`}>
                        {assignment.status}
                      </span>
                    </div>
                    <button className="submit-btn">Submit</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}