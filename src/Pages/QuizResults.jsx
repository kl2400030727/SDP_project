import React from "react";
import { useNavigate } from "react-router-dom";
import "./Exams.css";

function QuizResults() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Student";

  const handleBackToPortal = () => {
    navigate("/portal");
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    navigate("/");
  };

  // Sample quiz results data
  const quizResults = [
    {
      id: 1,
      quizName: "Mathematics - Calculus Basics",
      subject: "Mathematics",
      date: "2024-01-15",
      totalMarks: 50,
      obtainedMarks: 42,
      percentage: 84,
      grade: "A",
      timeSpent: "45 min",
      status: "Completed"
    },
    {
      id: 2,
      quizName: "Physics - Thermodynamics",
      subject: "Physics",
      date: "2024-01-12",
      totalMarks: 40,
      obtainedMarks: 35,
      percentage: 87.5,
      grade: "A",
      timeSpent: "38 min",
      status: "Completed"
    },
    {
      id: 3,
      quizName: "Computer Science - Data Structures",
      subject: "Computer Science",
      date: "2024-01-10",
      totalMarks: 60,
      obtainedMarks: 48,
      percentage: 80,
      grade: "B+",
      timeSpent: "52 min",
      status: "Completed"
    },
    {
      id: 4,
      quizName: "Chemistry - Organic Chemistry",
      subject: "Chemistry",
      date: "2024-01-08",
      totalMarks: 45,
      obtainedMarks: 36,
      percentage: 80,
      grade: "B+",
      timeSpent: "41 min",
      status: "Completed"
    },
    {
      id: 5,
      quizName: "English - Grammar Test",
      subject: "English",
      date: "2024-01-05",
      totalMarks: 30,
      obtainedMarks: 27,
      percentage: 90,
      grade: "A+",
      timeSpent: "25 min",
      status: "Completed"
    }
  ];

  const getGradeColor = (grade) => {
    switch(grade) {
      case 'A+': return '#4caf50';
      case 'A': return '#8bc34a';
      case 'B+': return '#ffc107';
      case 'B': return '#ff9800';
      case 'C': return '#f44336';
      default: return '#757575';
    }
  };

  return (
    <div className="exams-container">
      {/* Header */}
      <header className="exams-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={handleBackToPortal} className="back-btn">
              ← Back to Portal
            </button>
            <h1>Learning Management System</h1>
          </div>
          <div className="user-info">
            <span>Welcome, {username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <div className="exams-main">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Exams</h3>
            <ul>
              <li onClick={() => navigate("/upcoming-exams")}>Upcoming Exams</li>
              <li className="active">Quiz Results</li>
              <li onClick={() => navigate("/exam-schedule")}>Exam Schedule</li>
              <li onClick={() => navigate("/practice-tests")}>Practice Tests</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Quick Stats</h3>
            <div className="stats-card">
              <div className="stat-item">
                <span className="stat-value">84%</span>
                <span className="stat-label">Average Score</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">5</span>
                <span className="stat-label">Quizzes Taken</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">A</span>
                <span className="stat-label">Current Grade</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="exams-content">
          <div className="content-header">
            <h2>Quiz Results</h2>
            <p>View your performance in all attempted quizzes</p>
          </div>

          <div className="results-summary">
            <div className="summary-card">
              <h4>Overall Performance</h4>
              <div className="performance-stats">
                <div className="performance-item">
                  <span className="performance-value">83.5%</span>
                  <span className="performance-label">Average Score</span>
                </div>
                <div className="performance-item">
                  <span className="performance-value">5/5</span>
                  <span className="performance-label">Quizzes Completed</span>
                </div>
                <div className="performance-item">
                  <span className="performance-value">A</span>
                  <span className="performance-label">Overall Grade</span>
                </div>
              </div>
            </div>
          </div>

          <div className="results-table-container">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Quiz Name</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Marks</th>
                  <th>Percentage</th>
                  <th>Grade</th>
                  <th>Time Spent</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {quizResults.map((quiz) => (
                  <tr key={quiz.id}>
                    <td className="quiz-name">{quiz.quizName}</td>
                    <td className="subject">{quiz.subject}</td>
                    <td className="date">{quiz.date}</td>
                    <td className="marks">
                      {quiz.obtainedMarks}/{quiz.totalMarks}
                    </td>
                    <td className="percentage">{quiz.percentage}%</td>
                    <td className="grade">
                      <span 
                        className="grade-badge"
                        style={{ backgroundColor: getGradeColor(quiz.grade) }}
                      >
                        {quiz.grade}
                      </span>
                    </td>
                    <td className="time-spent">{quiz.timeSpent}</td>
                    <td className="status">
                      <span className={`status-badge ${quiz.status.toLowerCase()}`}>
                        {quiz.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="performance-insights">
            <h3>Performance Insights</h3>
            <div className="insights-grid">
              <div className="insight-card">
                <h4>📈 Strongest Subject</h4>
                <p>English - 90% Average</p>
              </div>
              <div className="insight-card">
                <h4>📚 Needs Improvement</h4>
                <p>Chemistry - 80% Average</p>
              </div>
              <div className="insight-card">
                <h4>⏱️ Average Time</h4>
                <p>40 minutes per quiz</p>
              </div>
              <div className="insight-card">
                <h4>🎯 Consistency</h4>
                <p>All above 80% - Excellent!</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default QuizResults;