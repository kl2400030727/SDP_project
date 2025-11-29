import React from "react";
import BasePage from "./BasePage";
import "./CourseProgress.css";

function CourseProgress() {
  const courses = [
    {
      id: 1,
      title: "Database Management System",
      instructor: "Dr. Sarah Chen",
      provider: "Amazon",
      progress: 75,
      completedSessions: 9,
      totalSessions: 12,
      lastAccessed: "2024-12-15",
      grade: "A-",
      timeSpent: "45 hours",
      upcomingDeadlines: [
        { title: "Assignment 4", dueDate: "2024-12-20", type: "assignment" },
        { title: "Quiz 3", dueDate: "2024-12-25", type: "quiz" }
      ]
    },
    {
      id: 2,
      title: "Object Oriented Programming",
      instructor: "Dr. James Wilson",
      provider: "Microsoft",
      progress: 60,
      completedSessions: 7,
      totalSessions: 12,
      lastAccessed: "2024-12-14",
      grade: "B+",
      timeSpent: "38 hours",
      upcomingDeadlines: [
        { title: "Project Submission", dueDate: "2024-12-22", type: "project" }
      ]
    },
    {
      id: 3,
      title: "Frontend Development",
      instructor: "Jessica Lee",
      provider: "Meta",
      progress: 90,
      completedSessions: 11,
      totalSessions: 12,
      lastAccessed: "2024-12-16",
      grade: "A",
      timeSpent: "52 hours",
      upcomingDeadlines: [
        { title: "Final Project", dueDate: "2024-12-28", type: "project" }
      ]
    },
    {
      id: 4,
      title: "Probability and Statistics",
      instructor: "Dr. Emily Parker",
      provider: "Stanford",
      progress: 30,
      completedSessions: 4,
      totalSessions: 12,
      lastAccessed: "2024-12-10",
      grade: "C+",
      timeSpent: "22 hours",
      upcomingDeadlines: [
        { title: "Midterm Exam", dueDate: "2024-12-18", type: "exam" },
        { title: "Assignment 2", dueDate: "2024-12-21", type: "assignment" }
      ]
    },
    {
      id: 5,
      title: "Open Source Engineering",
      instructor: "David Kim",
      provider: "GitHub",
      progress: 25,
      completedSessions: 3,
      totalSessions: 12,
      lastAccessed: "2024-12-08",
      grade: "B-",
      timeSpent: "18 hours",
      upcomingDeadlines: [
        { title: "Contribution 1", dueDate: "2024-12-24", type: "project" }
      ]
    },
    {
      id: 6,
      title: "Operating System",
      instructor: "Prof. Robert Brown",
      provider: "MIT",
      progress: 85,
      completedSessions: 10,
      totalSessions: 12,
      lastAccessed: "2024-12-15",
      grade: "A-",
      timeSpent: "48 hours",
      upcomingDeadlines: [
        { title: "Final Exam", dueDate: "2024-12-30", type: "exam" }
      ]
    },
    {
      id: 7,
      title: "Artificial Intelligence",
      instructor: "Prof. Michael Rodriguez",
      provider: "Google",
      progress: 40,
      completedSessions: 5,
      totalSessions: 12,
      lastAccessed: "2024-12-12",
      grade: "B",
      timeSpent: "35 hours",
      upcomingDeadlines: [
        { title: "ML Project", dueDate: "2024-12-26", type: "project" },
        { title: "Quiz 2", dueDate: "2024-12-19", type: "quiz" }
      ]
    }
  ];

  const getProgressColor = (progress) => {
    if (progress >= 80) return "#4caf50";
    if (progress >= 60) return "#ff9800";
    if (progress >= 40) return "#ffc107";
    return "#f44336";
  };

  const getGradeColor = (grade) => {
    if (grade.includes('A')) return "#4caf50";
    if (grade.includes('B')) return "#ff9800";
    if (grade.includes('C')) return "#ffc107";
    return "#f44336";
  };

  const calculateOverallProgress = () => {
    const totalProgress = courses.reduce((sum, course) => sum + course.progress, 0);
    return Math.round(totalProgress / courses.length);
  };

  const calculateAverageGrade = () => {
    const gradePoints = {
      'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'F': 0.0
    };
    
    const totalPoints = courses.reduce((sum, course) => {
      return sum + (gradePoints[course.grade] || 0);
    }, 0);
    
    return (totalPoints / courses.length).toFixed(2);
  };

  return (
    <BasePage 
      title="Course Progress" 
      description="Track your learning progress across all courses"
      activeItem="progress"
    >
      <div className="course-progress-container">
        {/* Progress Overview Cards */}
        <div className="progress-overview">
          <div className="overview-card">
            <div className="overview-icon">📊</div>
            <div className="overview-content">
              <h3>Overall Progress</h3>
              <div className="overview-value" style={{ color: getProgressColor(calculateOverallProgress()) }}>
                {calculateOverallProgress()}%
              </div>
            </div>
          </div>
          
          <div className="overview-card">
            <div className="overview-icon">⭐</div>
            <div className="overview-content">
              <h3>Average Grade</h3>
              <div className="overview-value" style={{ color: getGradeColor('B+') }}>
                {calculateAverageGrade()} GPA
              </div>
            </div>
          </div>
          
          <div className="overview-card">
            <div className="overview-icon">⏱️</div>
            <div className="overview-content">
              <h3>Total Time</h3>
              <div className="overview-value">258 hours</div>
            </div>
          </div>
          
          <div className="overview-card">
            <div className="overview-icon">✅</div>
            <div className="overview-content">
              <h3>Completed</h3>
              <div className="overview-value">7/7 courses</div>
            </div>
          </div>
        </div>

        {/* Individual Course Progress */}
        <div className="progress-grid">
          {courses.map(course => (
            <div key={course.id} className="progress-card">
              <div className="progress-card-header">
                <div className="course-basic-info">
                  <div className="course-provider">{course.provider}</div>
                  <h3>{course.title}</h3>
                  <p>Instructor: {course.instructor}</p>
                </div>
                <div className="course-grade" style={{ color: getGradeColor(course.grade) }}>
                  {course.grade}
                </div>
              </div>

              <div className="progress-details">
                <div className="progress-section">
                  <div className="progress-info">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${course.progress}%`,
                        backgroundColor: getProgressColor(course.progress)
                      }}
                    ></div>
                  </div>
                </div>

                <div className="progress-stats">
                  <div className="stat-item">
                    <span className="stat-label">Sessions Completed</span>
                    <span className="stat-value">{course.completedSessions}/{course.totalSessions}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Time Spent</span>
                    <span className="stat-value">{course.timeSpent}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Last Accessed</span>
                    <span className="stat-value">{course.lastAccessed}</span>
                  </div>
                </div>

                {course.upcomingDeadlines.length > 0 && (
                  <div className="deadlines-section">
                    <h4>Upcoming Deadlines</h4>
                    <div className="deadlines-list">
                      {course.upcomingDeadlines.map((deadline, index) => (
                        <div key={index} className="deadline-item">
                          <span className={`deadline-type ${deadline.type}`}>
                            {deadline.type === 'exam' ? '📝' : 
                             deadline.type === 'quiz' ? '✏️' : 
                             deadline.type === 'project' ? '📁' : '📄'}
                          </span>
                          <span className="deadline-title">{deadline.title}</span>
                          <span className="deadline-date">Due: {deadline.dueDate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="progress-actions">
                  <button className="continue-btn">Continue Learning</button>
                  <button className="details-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BasePage>
  );
}

export default CourseProgress;