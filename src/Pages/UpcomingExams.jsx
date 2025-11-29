import React, { useState } from "react";
import BasePage from "./BasePage";
import "./UpcomingExams.css";

function UpcomingExams() {
  const [selectedExam, setSelectedExam] = useState(null);

  const exams = [
    {
      id: 1,
      course: "Database Management System",
      provider: "Amazon",
      instructor: "Dr. Sarah Chen",
      title: "Midterm Exam",
      type: "exam",
      date: "2024-12-20",
      time: "10:00 AM - 12:00 PM",
      duration: "120 minutes",
      totalMarks: 100,
      passingMarks: 40,
      format: "Multiple Choice + Practical",
      topics: ["SQL Queries", "Database Design", "Normalization", "Transaction Management"],
      instructions: [
        "Bring your student ID",
        "No electronic devices allowed",
        "Calculator permitted",
        "Arrive 15 minutes early"
      ],
      status: "upcoming",
      preparation: "85%",
      room: "Room 301",
      important: true
    },
    {
      id: 2,
      course: "Object Oriented Programming",
      provider: "Microsoft",
      instructor: "Dr. James Wilson",
      title: "Final Project Submission",
      type: "project",
      date: "2024-12-22",
      time: "11:59 PM",
      duration: "N/A",
      totalMarks: 150,
      passingMarks: 60,
      format: "Project Submission",
      topics: ["OOP Principles", "Design Patterns", "Code Quality", "Documentation"],
      instructions: [
        "Submit via GitHub Classroom",
        "Include README file",
        "Code comments required",
        "Test cases must be included"
      ],
      status: "upcoming",
      preparation: "60%",
      room: "Online",
      important: true
    },
    {
      id: 3,
      course: "Frontend Development",
      provider: "Meta",
      instructor: "Jessica Lee",
      title: "React Practical Test",
      type: "practical",
      date: "2024-12-18",
      time: "2:00 PM - 4:00 PM",
      duration: "120 minutes",
      totalMarks: 80,
      passingMarks: 32,
      format: "Coding Practical",
      topics: ["React Components", "State Management", "API Integration", "CSS Styling"],
      instructions: [
        "Use provided development environment",
        "Internet access allowed for documentation",
        "No communication with others",
        "Submit code via GitHub"
      ],
      status: "upcoming",
      preparation: "75%",
      room: "Computer Lab 2",
      important: false
    },
    {
      id: 4,
      course: "Probability and Statistics",
      provider: "Stanford",
      instructor: "Dr. Emily Parker",
      title: "Quiz 2 - Probability Distributions",
      type: "quiz",
      date: "2024-12-16",
      time: "9:00 AM - 9:45 AM",
      duration: "45 minutes",
      totalMarks: 50,
      passingMarks: 20,
      format: "Multiple Choice",
      topics: ["Binomial Distribution", "Normal Distribution", "Poisson Distribution", "Expected Value"],
      instructions: [
        "Closed book",
        "Formula sheet provided",
        "Calculator required",
        "No talking during quiz"
      ],
      status: "upcoming",
      preparation: "40%",
      room: "Room 205",
      important: false
    },
    {
      id: 5,
      course: "Operating System",
      provider: "MIT",
      instructor: "Prof. Robert Brown",
      title: "Final Exam",
      type: "exam",
      date: "2024-12-28",
      time: "1:00 PM - 4:00 PM",
      duration: "180 minutes",
      totalMarks: 200,
      passingMarks: 80,
      format: "Theory + Problems",
      topics: ["Process Management", "Memory Management", "File Systems", "Synchronization", "Virtual Memory"],
      instructions: [
        "Comprehensive exam",
        "Bring blue book for answers",
        "No electronic devices",
        "Arrive 30 minutes early"
      ],
      status: "upcoming",
      preparation: "30%",
      room: "Main Hall A",
      important: true
    },
    {
      id: 6,
      course: "Artificial Intelligence",
      provider: "Google",
      instructor: "Prof. Michael Rodriguez",
      title: "Machine Learning Assignment",
      type: "assignment",
      date: "2024-12-19",
      time: "11:59 PM",
      duration: "N/A",
      totalMarks: 100,
      passingMarks: 40,
      format: "Code + Report",
      topics: ["Linear Regression", "Classification", "Model Evaluation", "Feature Engineering"],
      instructions: [
        "Submit Jupyter notebook",
        "Include detailed report",
        "Compare multiple algorithms",
        "Use provided dataset"
      ],
      status: "upcoming",
      preparation: "50%",
      room: "Online",
      important: false
    }
  ];

  const getExamTypeColor = (type) => {
    switch (type) {
      case 'exam': return '#f44336';
      case 'quiz': return '#ff9800';
      case 'practical': return '#2196f3';
      case 'project': return '#4caf50';
      case 'assignment': return '#9c27b0';
      default: return '#666';
    }
  };

  const getExamTypeIcon = (type) => {
    switch (type) {
      case 'exam': return '📝';
      case 'quiz': return '✏️';
      case 'practical': return '💻';
      case 'project': return '📁';
      case 'assignment': return '📄';
      default: return '📋';
    }
  };

  const getDaysUntil = (date) => {
    const today = new Date();
    const examDate = new Date(date);
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusColor = (preparation) => {
    if (preparation >= 80) return "#4caf50";
    if (preparation >= 60) return "#ff9800";
    if (preparation >= 40) return "#ffc107";
    return "#f44336";
  };

  const upcomingExams = exams.filter(exam => getDaysUntil(exam.date) >= 0);
  const pastExams = exams.filter(exam => getDaysUntil(exam.date) < 0);

  return (
    <BasePage 
      title="Upcoming Exams" 
      description="View your scheduled exams, quizzes, and assignments"
      activeItem="upcoming-exams"
    >
      <div className="upcoming-exams-container">
        {/* Exam Statistics */}
        <div className="exam-stats">
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-content">
              <h3>Upcoming</h3>
              <div className="stat-value">{upcomingExams.length}</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⏰</div>
            <div className="stat-content">
              <h3>Next 7 Days</h3>
              <div className="stat-value">
                {upcomingExams.filter(exam => getDaysUntil(exam.date) <= 7).length}
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <h3>Courses</h3>
              <div className="stat-value">
                {[...new Set(upcomingExams.map(exam => exam.course))].length}
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h3>Avg Preparation</h3>
              <div className="stat-value">
                {Math.round(upcomingExams.reduce((sum, exam) => sum + parseInt(exam.preparation), 0) / upcomingExams.length)}%
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="exams-section">
          <h3>Upcoming Exams & Assignments</h3>
          <div className="exams-grid">
            {upcomingExams.map(exam => {
              const daysUntil = getDaysUntil(exam.date);
              
              return (
                <div 
                  key={exam.id} 
                  className={`exam-card ${exam.important ? 'important' : ''}`}
                  onClick={() => setSelectedExam(exam)}
                >
                  <div className="exam-header">
                    <div className="exam-type" style={{ color: getExamTypeColor(exam.type) }}>
                      <span className="exam-icon">{getExamTypeIcon(exam.type)}</span>
                      {exam.type.toUpperCase()}
                    </div>
                    {exam.important && <div className="important-badge">Important</div>}
                  </div>

                  <div className="exam-content">
                    <h4>{exam.title}</h4>
                    <p className="course-name">{exam.course}</p>
                    <p className="instructor">Instructor: {exam.instructor}</p>
                    
                    <div className="exam-details">
                      <div className="detail-item">
                        <span className="label">📅 Date:</span>
                        <span className="value">{exam.date}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">⏰ Time:</span>
                        <span className="value">{exam.time}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">⏱️ Duration:</span>
                        <span className="value">{exam.duration}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">📍 Location:</span>
                        <span className="value">{exam.room}</span>
                      </div>
                    </div>

                    <div className="exam-meta">
                      <div className="meta-item">
                        <span>Marks: </span>
                        <strong>{exam.totalMarks}</strong>
                      </div>
                      <div className="meta-item">
                        <span>Passing: </span>
                        <strong>{exam.passingMarks}</strong>
                      </div>
                    </div>

                    <div className="preparation-section">
                      <div className="preparation-info">
                        <span>Preparation</span>
                        <span>{exam.preparation}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ 
                            width: `${exam.preparation}%`,
                            backgroundColor: getStatusColor(parseInt(exam.preparation))
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="countdown">
                      {daysUntil === 0 ? (
                        <span className="today">Today</span>
                      ) : daysUntil === 1 ? (
                        <span className="tomorrow">Tomorrow</span>
                      ) : (
                        <span className="days-left">{daysUntil} days left</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Past Exams */}
        {pastExams.length > 0 && (
          <div className="exams-section">
            <h3>Recent Exams</h3>
            <div className="exams-grid">
              {pastExams.map(exam => (
                <div 
                  key={exam.id} 
                  className="exam-card past"
                  onClick={() => setSelectedExam(exam)}
                >
                  <div className="exam-header">
                    <div className="exam-type" style={{ color: getExamTypeColor(exam.type) }}>
                      <span className="exam-icon">{getExamTypeIcon(exam.type)}</span>
                      {exam.type.toUpperCase()}
                    </div>
                    <div className="past-badge">Completed</div>
                  </div>

                  <div className="exam-content">
                    <h4>{exam.title}</h4>
                    <p className="course-name">{exam.course}</p>
                    
                    <div className="exam-details">
                      <div className="detail-item">
                        <span className="label">📅 Date:</span>
                        <span className="value">{exam.date}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">⏱️ Duration:</span>
                        <span className="value">{exam.duration}</span>
                      </div>
                    </div>

                    <div className="view-results">
                      View Results →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exam Details Modal */}
        {selectedExam && (
          <div className="exam-modal">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title">
                  <span 
                    className="exam-type-badge"
                    style={{ backgroundColor: getExamTypeColor(selectedExam.type) }}
                  >
                    {getExamTypeIcon(selectedExam.type)} {selectedExam.type.toUpperCase()}
                  </span>
                  <h3>{selectedExam.title}</h3>
                </div>
                <button 
                  className="close-modal"
                  onClick={() => setSelectedExam(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-body">
                <div className="exam-overview">
                  <div className="overview-item">
                    <strong>Course:</strong> {selectedExam.course}
                  </div>
                  <div className="overview-item">
                    <strong>Instructor:</strong> {selectedExam.instructor}
                  </div>
                  <div className="overview-item">
                    <strong>Date & Time:</strong> {selectedExam.date} at {selectedExam.time}
                  </div>
                  <div className="overview-item">
                    <strong>Duration:</strong> {selectedExam.duration}
                  </div>
                  <div className="overview-item">
                    <strong>Location:</strong> {selectedExam.room}
                  </div>
                  <div className="overview-item">
                    <strong>Format:</strong> {selectedExam.format}
                  </div>
                  <div className="overview-item">
                    <strong>Total Marks:</strong> {selectedExam.totalMarks}
                  </div>
                  <div className="overview-item">
                    <strong>Passing Marks:</strong> {selectedExam.passingMarks}
                  </div>
                </div>

                <div className="exam-details-section">
                  <h4>Topics Covered</h4>
                  <div className="topics-list">
                    {selectedExam.topics.map((topic, index) => (
                      <span key={index} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>

                <div className="exam-details-section">
                  <h4>Instructions</h4>
                  <ul className="instructions-list">
                    {selectedExam.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </div>

                {getDaysUntil(selectedExam.date) >= 0 && (
                  <div className="preparation-section-modal">
                    <h4>Your Preparation</h4>
                    <div className="preparation-info">
                      <span>{selectedExam.preparation}% Complete</span>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ 
                            width: `${selectedExam.preparation}%`,
                            backgroundColor: getStatusColor(parseInt(selectedExam.preparation))
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="preparation-actions">
                      <button className="study-btn">Study Materials</button>
                      <button className="practice-btn">Practice Tests</button>
                      <button className="reminder-btn">Set Reminder</button>
                    </div>
                  </div>
                )}

                <div className="modal-actions">
                  <button className="primary-btn">Add to Calendar</button>
                  <button className="secondary-btn">View Course Materials</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </BasePage>
  );
}

export default UpcomingExams;