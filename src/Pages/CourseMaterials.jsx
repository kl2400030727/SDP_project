import React, { useState } from "react";
import BasePage from "./BasePage";
import "./CourseMaterials.css";

function CourseMaterials() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Database Management System",
      description: "Learn about database design, SQL, normalization, and database administration.",
      instructor: "Dr. Sarah Chen",
      provider: "Amazon",
      sessions: [
        { id: 1, title: "Introduction to Databases", duration: "45 min", type: "video", completed: true },
        { id: 2, title: "SQL Fundamentals", duration: "60 min", type: "video", completed: true },
        { id: 3, title: "Database Design", duration: "50 min", type: "video", completed: true },
        { id: 4, title: "Normalization", duration: "55 min", type: "video", completed: false },
        { id: 5, title: "SQL Advanced Queries", duration: "70 min", type: "video", completed: false },
        { id: 6, title: "Transaction Management", duration: "45 min", type: "video", completed: false },
        { id: 7, title: "Database Security", duration: "50 min", type: "video", completed: false },
        { id: 8, title: "NoSQL Databases", duration: "60 min", type: "video", completed: false },
        { id: 9, title: "Database Administration", duration: "55 min", type: "video", completed: false },
        { id: 10, title: "Performance Tuning", duration: "65 min", type: "video", completed: false },
        { id: 11, title: "Backup and Recovery", duration: "45 min", type: "video", completed: false },
        { id: 12, title: "Final Project", duration: "90 min", type: "assignment", completed: false }
      ]
    },
    {
      id: 2,
      title: "Object Oriented Programming",
      description: "Master OOP concepts, design patterns, and software development principles.",
      instructor: "Dr. James Wilson",
      provider: "Microsoft",
      sessions: [
        { id: 1, title: "OOP Principles", duration: "50 min", type: "video", completed: true },
        { id: 2, title: "Classes and Objects", duration: "45 min", type: "video", completed: true },
        { id: 3, title: "Inheritance", duration: "55 min", type: "video", completed: true },
        { id: 4, title: "Polymorphism", duration: "60 min", type: "video", completed: false },
        { id: 5, title: "Encapsulation", duration: "45 min", type: "video", completed: false },
        { id: 6, title: "Design Patterns", duration: "70 min", type: "video", completed: false },
        { id: 7, title: "Exception Handling", duration: "50 min", type: "video", completed: false },
        { id: 8, title: "File I/O", duration: "55 min", type: "video", completed: false },
        { id: 9, title: "GUI Programming", duration: "65 min", type: "video", completed: false },
        { id: 10, title: "Multithreading", duration: "60 min", type: "video", completed: false },
        { id: 11, title: "Networking", duration: "55 min", type: "video", completed: false },
        { id: 12, title: "Final Project", duration: "120 min", type: "assignment", completed: false }
      ]
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "Build modern web applications using React, HTML, CSS, and JavaScript.",
      instructor: "Jessica Lee",
      provider: "Meta",
      sessions: [
        { id: 1, title: "HTML5 Fundamentals", duration: "40 min", type: "video", completed: true },
        { id: 2, title: "CSS3 Styling", duration: "55 min", type: "video", completed: true },
        { id: 3, title: "JavaScript Basics", duration: "60 min", type: "video", completed: true },
        { id: 4, title: "React Introduction", duration: "50 min", type: "video", completed: false },
        { id: 5, title: "Components & Props", duration: "45 min", type: "video", completed: false },
        { id: 6, title: "State Management", duration: "55 min", type: "video", completed: false },
        { id: 7, title: "React Hooks", duration: "60 min", type: "video", completed: false },
        { id: 8, title: "Routing", duration: "50 min", type: "video", completed: false },
        { id: 9, title: "API Integration", duration: "65 min", type: "video", completed: false },
        { id: 10, title: "State Management", duration: "70 min", type: "video", completed: false },
        { id: 11, title: "Testing", duration: "45 min", type: "video", completed: false },
        { id: 12, title: "Deployment", duration: "55 min", type: "video", completed: false }
      ]
    },
    {
      id: 4,
      title: "Probability and Statistics",
      description: "Understand statistical analysis, probability theory, and data interpretation.",
      instructor: "Dr. Emily Parker",
      provider: "Stanford",
      sessions: [
        { id: 1, title: "Basic Probability", duration: "50 min", type: "video", completed: true },
        { id: 2, title: "Random Variables", duration: "55 min", type: "video", completed: false },
        { id: 3, title: "Probability Distributions", duration: "60 min", type: "video", completed: false },
        { id: 4, title: "Statistical Inference", duration: "65 min", type: "video", completed: false },
        { id: 5, title: "Hypothesis Testing", duration: "70 min", type: "video", completed: false },
        { id: 6, title: "Regression Analysis", duration: "75 min", type: "video", completed: false },
        { id: 7, title: "ANOVA", duration: "60 min", type: "video", completed: false },
        { id: 8, title: "Time Series", duration: "65 min", type: "video", completed: false },
        { id: 9, title: "Bayesian Statistics", duration: "70 min", type: "video", completed: false },
        { id: 10, title: "Multivariate Analysis", duration: "75 min", type: "video", completed: false },
        { id: 11, title: "Statistical Software", duration: "55 min", type: "video", completed: false },
        { id: 12, title: "Case Studies", duration: "80 min", type: "assignment", completed: false }
      ]
    },
    {
      id: 5,
      title: "Open Source Engineering",
      description: "Contribute to open source projects and learn collaborative development.",
      instructor: "David Kim",
      provider: "GitHub",
      sessions: [
        { id: 1, title: "Open Source Introduction", duration: "45 min", type: "video", completed: true },
        { id: 2, title: "Git & GitHub", duration: "60 min", type: "video", completed: false },
        { id: 3, title: "Contributing Guidelines", duration: "50 min", type: "video", completed: false },
        { id: 4, title: "Code Review Process", duration: "55 min", type: "video", completed: false },
        { id: 5, title: "Documentation", duration: "45 min", type: "video", completed: false },
        { id: 6, title: "Community Building", duration: "60 min", type: "video", completed: false },
        { id: 7, title: "License Management", duration: "50 min", type: "video", completed: false },
        { id: 8, title: "CI/CD for OSS", duration: "65 min", type: "video", completed: false },
        { id: 9, title: "Project Maintenance", duration: "55 min", type: "video", completed: false },
        { id: 10, title: "Security in OSS", duration: "60 min", type: "video", completed: false },
        { id: 11, title: "Funding OSS", duration: "50 min", type: "video", completed: false },
        { id: 12, title: "Final Contribution", duration: "90 min", type: "assignment", completed: false }
      ]
    },
    {
      id: 6,
      title: "Operating System",
      description: "Learn about process management, memory allocation, and system architecture.",
      instructor: "Prof. Robert Brown",
      provider: "MIT",
      sessions: [
        { id: 1, title: "OS Introduction", duration: "50 min", type: "video", completed: true },
        { id: 2, title: "Process Management", duration: "60 min", type: "video", completed: true },
        { id: 3, title: "Threads & Concurrency", duration: "55 min", type: "video", completed: false },
        { id: 4, title: "CPU Scheduling", duration: "65 min", type: "video", completed: false },
        { id: 5, title: "Memory Management", duration: "70 min", type: "video", completed: false },
        { id: 6, title: "Virtual Memory", duration: "60 min", type: "video", completed: false },
        { id: 7, title: "File Systems", duration: "55 min", type: "video", completed: false },
        { id: 8, title: "I/O Systems", duration: "50 min", type: "video", completed: false },
        { id: 9, title: "Deadlocks", duration: "45 min", type: "video", completed: false },
        { id: 10, title: "Security & Protection", duration: "60 min", type: "video", completed: false },
        { id: 11, title: "Virtualization", duration: "65 min", type: "video", completed: false },
        { id: 12, title: "Distributed Systems", duration: "70 min", type: "video", completed: false }
      ]
    },
    {
      id: 7,
      title: "Artificial Intelligence",
      description: "Explore AI algorithms, neural networks, and machine learning models.",
      instructor: "Prof. Michael Rodriguez",
      provider: "Google",
      sessions: [
        { id: 1, title: "AI Introduction", duration: "55 min", type: "video", completed: true },
        { id: 2, title: "Search Algorithms", duration: "60 min", type: "video", completed: false },
        { id: 3, title: "Knowledge Representation", duration: "65 min", type: "video", completed: false },
        { id: 4, title: "Machine Learning Basics", duration: "70 min", type: "video", completed: false },
        { id: 5, title: "Neural Networks", duration: "75 min", type: "video", completed: false },
        { id: 6, title: "Deep Learning", duration: "80 min", type: "video", completed: false },
        { id: 7, title: "Natural Language Processing", duration: "70 min", type: "video", completed: false },
        { id: 8, title: "Computer Vision", duration: "75 min", type: "video", completed: false },
        { id: 9, title: "Reinforcement Learning", duration: "65 min", type: "video", completed: false },
        { id: 10, title: "AI Ethics", duration: "60 min", type: "video", completed: false },
        { id: 11, title: "AI in Industry", duration: "55 min", type: "video", completed: false },
        { id: 12, title: "Capstone Project", duration: "120 min", type: "assignment", completed: false }
      ]
    }
  ];

  const toggleCourseExpansion = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const handleSessionClick = (session) => {
    setSelectedCourse(session);
  };

  const calculateProgress = (sessions) => {
    const completed = sessions.filter(session => session.completed).length;
    return Math.round((completed / sessions.length) * 100);
  };

  return (
    <BasePage 
      title="Course Materials" 
      description="Access all your course materials and learning sessions"
      activeItem="materials"
    >
      <div className="course-materials-container">
        <div className="materials-grid">
          {courses.map(course => {
            const progress = calculateProgress(course.sessions);
            const isExpanded = expandedCourse === course.id;
            
            return (
              <div key={course.id} className={`material-course-card ${isExpanded ? 'expanded' : ''}`}>
                <div 
                  className="material-course-header"
                  onClick={() => toggleCourseExpansion(course.id)}
                >
                  <div className="material-course-info">
                    <div className="material-course-provider">{course.provider}</div>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="material-course-meta">
                      <span className="instructor">👤 {course.instructor}</span>
                      <span className="sessions-count">{course.sessions.length} sessions</span>
                    </div>
                  </div>
                  <div className="material-course-actions">
                    <div className="progress-section">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="progress-text">{progress}% Complete</div>
                    </div>
                    <button className="expand-btn">
                      {isExpanded ? '▲' : '▼'}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="sessions-container">
                    <div className="sessions-header">
                      <h4>Course Sessions</h4>
                      <span>{course.sessions.filter(s => s.completed).length} of {course.sessions.length} completed</span>
                    </div>
                    <div className="sessions-grid">
                      {course.sessions.map(session => (
                        <div 
                          key={session.id} 
                          className={`session-card ${session.completed ? 'completed' : ''} ${session.type}`}
                          onClick={() => handleSessionClick(session)}
                        >
                          <div className="session-number">Session {session.id}</div>
                          <h5>{session.title}</h5>
                          <div className="session-meta">
                            <span className="session-duration">{session.duration}</span>
                            <span className={`session-type ${session.type}`}>
                              {session.type === 'video' ? '🎥 Video' : '📝 Assignment'}
                            </span>
                          </div>
                          <div className="session-status">
                            {session.completed ? (
                              <span className="completed-badge">✓ Completed</span>
                            ) : (
                              <button className="start-session-btn">Start</button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {selectedCourse && (
          <div className="session-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h3>{selectedCourse.title}</h3>
                <button 
                  className="close-modal"
                  onClick={() => setSelectedCourse(null)}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="session-details">
                  <div className="detail-item">
                    <strong>Duration:</strong> {selectedCourse.duration}
                  </div>
                  <div className="detail-item">
                    <strong>Type:</strong> {selectedCourse.type === 'video' ? 'Video Lecture' : 'Assignment'}
                  </div>
                  <div className="detail-item">
                    <strong>Status:</strong> 
                    <span className={selectedCourse.completed ? 'status-completed' : 'status-pending'}>
                      {selectedCourse.completed ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>
                <div className="session-actions">
                  {selectedCourse.type === 'video' ? (
                    <button className="watch-btn">
                      {selectedCourse.completed ? 'Rewatch Video' : 'Watch Video'}
                    </button>
                  ) : (
                    <button className="start-assignment-btn">
                      {selectedCourse.completed ? 'Review Assignment' : 'Start Assignment'}
                    </button>
                  )}
                  <button className="download-btn">Download Materials</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </BasePage>
  );
}

export default CourseMaterials;