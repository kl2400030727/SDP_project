import React, { useState } from "react";
import BasePage from "./BasePage";
import "./Grades.css";

function Grades() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Database Management System",
      instructor: "Dr. Sarah Chen",
      provider: "Amazon",
      overallGrade: "A-",
      gpa: 3.7,
      assignments: [
        { name: "SQL Basics", grade: "A", score: 95, maxScore: 100, weight: 10 },
        { name: "Database Design", grade: "A-", score: 90, maxScore: 100, weight: 15 },
        { name: "Normalization", grade: "B+", score: 88, maxScore: 100, weight: 15 },
        { name: "Final Project", grade: "A", score: 92, maxScore: 100, weight: 30 },
        { name: "Midterm Exam", grade: "B+", score: 87, maxScore: 100, weight: 20 },
        { name: "Quizzes", grade: "A-", score: 91, maxScore: 100, weight: 10 }
      ]
    },
    {
      id: 2,
      title: "Object Oriented Programming",
      instructor: "Dr. James Wilson",
      provider: "Microsoft",
      overallGrade: "B+",
      gpa: 3.3,
      assignments: [
        { name: "Classes & Objects", grade: "A", score: 94, maxScore: 100, weight: 10 },
        { name: "Inheritance", grade: "B", score: 85, maxScore: 100, weight: 15 },
        { name: "Polymorphism", grade: "B+", score: 88, maxScore: 100, weight: 15 },
        { name: "Design Patterns", grade: "B", score: 82, maxScore: 100, weight: 20 },
        { name: "Final Project", grade: "A-", score: 90, maxScore: 100, weight: 30 },
        { name: "Participation", grade: "A", score: 96, maxScore: 100, weight: 10 }
      ]
    },
    {
      id: 3,
      title: "Frontend Development",
      instructor: "Jessica Lee",
      provider: "Meta",
      overallGrade: "A",
      gpa: 4.0,
      assignments: [
        { name: "HTML/CSS Project", grade: "A", score: 98, maxScore: 100, weight: 15 },
        { name: "JavaScript Basics", grade: "A", score: 95, maxScore: 100, weight: 15 },
        { name: "React Components", grade: "A-", score: 92, maxScore: 100, weight: 20 },
        { name: "State Management", grade: "A", score: 96, maxScore: 100, weight: 20 },
        { name: "Final Project", grade: "A", score: 97, maxScore: 100, weight: 30 }
      ]
    },
    {
      id: 4,
      title: "Probability and Statistics",
      instructor: "Dr. Emily Parker",
      provider: "Stanford",
      overallGrade: "C+",
      gpa: 2.3,
      assignments: [
        { name: "Probability Basics", grade: "B", score: 84, maxScore: 100, weight: 10 },
        { name: "Random Variables", grade: "C", score: 73, maxScore: 100, weight: 15 },
        { name: "Distributions", grade: "C+", score: 78, maxScore: 100, weight: 15 },
        { name: "Hypothesis Testing", grade: "C", score: 72, maxScore: 100, weight: 20 },
        { name: "Midterm Exam", grade: "D+", score: 68, maxScore: 100, weight: 20 },
        { name: "Final Project", grade: "B-", score: 80, maxScore: 100, weight: 20 }
      ]
    },
    {
      id: 5,
      title: "Open Source Engineering",
      instructor: "David Kim",
      provider: "GitHub",
      overallGrade: "B-",
      gpa: 2.7,
      assignments: [
        { name: "Git Fundamentals", grade: "A-", score: 91, maxScore: 100, weight: 15 },
        { name: "Contribution 1", grade: "B", score: 83, maxScore: 100, weight: 20 },
        { name: "Code Review", grade: "C+", score: 79, maxScore: 100, weight: 15 },
        { name: "Documentation", grade: "B-", score: 81, maxScore: 100, weight: 20 },
        { name: "Final Contribution", grade: "C+", score: 77, maxScore: 100, weight: 30 }
      ]
    },
    {
      id: 6,
      title: "Operating System",
      instructor: "Prof. Robert Brown",
      provider: "MIT",
      overallGrade: "A-",
      gpa: 3.7,
      assignments: [
        { name: "Process Management", grade: "A", score: 94, maxScore: 100, weight: 15 },
        { name: "Memory Management", grade: "A-", score: 90, maxScore: 100, weight: 20 },
        { name: "File Systems", grade: "B+", score: 88, maxScore: 100, weight: 15 },
        { name: "Midterm Exam", grade: "A-", score: 91, maxScore: 100, weight: 25 },
        { name: "Final Project", grade: "A", score: 95, maxScore: 100, weight: 25 }
      ]
    },
    {
      id: 7,
      title: "Artificial Intelligence",
      instructor: "Prof. Michael Rodriguez",
      provider: "Google",
      overallGrade: "B",
      gpa: 3.0,
      assignments: [
        { name: "Search Algorithms", grade: "B+", score: 87, maxScore: 100, weight: 15 },
        { name: "Machine Learning", grade: "B", score: 83, maxScore: 100, weight: 20 },
        { name: "Neural Networks", grade: "B-", score: 81, maxScore: 100, weight: 20 },
        { name: "NLP Project", grade: "B+", score: 88, maxScore: 100, weight: 25 },
        { name: "Final Exam", grade: "C+", score: 78, maxScore: 100, weight: 20 }
      ]
    }
  ];

  const getGradeColor = (grade) => {
    if (grade.includes('A')) return "#4caf50";
    if (grade.includes('B')) return "#ff9800";
    if (grade.includes('C')) return "#ffc107";
    return "#f44336";
  };

  const calculateAverageGPA = () => {
    const totalGPA = courses.reduce((sum, course) => sum + course.gpa, 0);
    return (totalGPA / courses.length).toFixed(2);
  };

  return (
    <BasePage 
      title="Grades" 
      description="View your grades and performance metrics across all courses"
      activeItem="grades"
    >
      <div className="grades-container">
        {/* Grades Summary */}
        <div className="grades-summary">
          <div className="summary-card">
            <div className="summary-icon">📚</div>
            <div className="summary-content">
              <h3>Courses Taken</h3>
              <div className="summary-value">{courses.length}</div>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="summary-icon">⭐</div>
            <div className="summary-content">
              <h3>Average GPA</h3>
              <div className="summary-value">{calculateAverageGPA()}</div>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="summary-icon">🏆</div>
            <div className="summary-content">
              <h3>Highest Grade</h3>
              <div className="summary-value">A</div>
            </div>
          </div>
          
          <div className="summary-card">
            <div className="summary-icon">📈</div>
            <div className="summary-content">
              <h3>Performance</h3>
              <div className="summary-value">Good</div>
            </div>
          </div>
        </div>

        {/* Course Grades Grid */}
        <div className="grades-grid">
          {courses.map(course => (
            <div 
              key={course.id} 
              className="grade-card"
              onClick={() => setSelectedCourse(course)}
            >
              <div className="grade-card-header">
                <div className="course-info">
                  <div className="course-provider">{course.provider}</div>
                  <h3>{course.title}</h3>
                  <p>{course.instructor}</p>
                </div>
                <div 
                  className="overall-grade"
                  style={{ color: getGradeColor(course.overallGrade) }}
                >
                  {course.overallGrade}
                </div>
              </div>

              <div className="grade-details">
                <div className="gpa-section">
                  <span>GPA: </span>
                  <strong>{course.gpa}</strong>
                </div>
                
                <div className="assignments-preview">
                  <h4>Recent Assignments</h4>
                  <div className="assignments-list">
                    {course.assignments.slice(0, 3).map((assignment, index) => (
                      <div key={index} className="assignment-preview">
                        <span className="assignment-name">{assignment.name}</span>
                        <span 
                          className="assignment-grade"
                          style={{ color: getGradeColor(assignment.grade) }}
                        >
                          {assignment.grade}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="view-details">
                  Click to view all assignments →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Assignment Details Modal */}
        {selectedCourse && (
          <div className="grades-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h3>{selectedCourse.title} - Grade Details</h3>
                <button 
                  className="close-modal"
                  onClick={() => setSelectedCourse(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-body">
                <div className="course-overview">
                  <div className="overview-item">
                    <strong>Instructor:</strong> {selectedCourse.instructor}
                  </div>
                  <div className="overview-item">
                    <strong>Overall Grade:</strong>
                    <span style={{ color: getGradeColor(selectedCourse.overallGrade) }}>
                      {selectedCourse.overallGrade}
                    </span>
                  </div>
                  <div className="overview-item">
                    <strong>GPA:</strong> {selectedCourse.gpa}
                  </div>
                </div>

                <div className="assignments-table">
                  <h4>Assignment Details</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Assignment</th>
                        <th>Score</th>
                        <th>Grade</th>
                        <th>Weight</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCourse.assignments.map((assignment, index) => (
                        <tr key={index}>
                          <td className="assignment-name">{assignment.name}</td>
                          <td>{assignment.score}/{assignment.maxScore}</td>
                          <td 
                            className="assignment-grade"
                            style={{ color: getGradeColor(assignment.grade) }}
                          >
                            {assignment.grade}
                          </td>
                          <td>{assignment.weight}%</td>
                          <td>
                            <span className={`status ${assignment.score >= 70 ? 'completed' : 'needs-improvement'}`}>
                              {assignment.score >= 70 ? '✓ Good' : 'Needs Work'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="performance-insights">
                  <h4>Performance Insights</h4>
                  <div className="insights-grid">
                    <div className="insight-card">
                      <strong>Strongest Area</strong>
                      <span>{
                        selectedCourse.assignments.reduce((max, assignment) => 
                          assignment.score > max.score ? assignment : max
                        ).name
                      }</span>
                    </div>
                    <div className="insight-card">
                      <strong>Needs Improvement</strong>
                      <span>{
                        selectedCourse.assignments.reduce((min, assignment) => 
                          assignment.score < min.score ? assignment : min
                        ).name
                      }</span>
                    </div>
                    <div className="insight-card">
                      <strong>Average Score</strong>
                      <span>{
                        Math.round(selectedCourse.assignments.reduce((sum, assignment) => 
                          sum + assignment.score, 0) / selectedCourse.assignments.length
                        )
                      }%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </BasePage>
  );
}

export default Grades;