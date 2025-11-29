import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Exams.css";

function PracticeTests() {
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

  // Sample practice tests data
  const practiceTests = [
    {
      id: 1,
      testName: "Mathematics - Algebra Fundamentals",
      subject: "Mathematics",
      duration: "60 minutes",
      questions: 30,
      difficulty: "Beginner",
      attempts: 3,
      bestScore: 85,
      lastAttempt: "2024-01-18",
      status: "Available"
    },
    {
      id: 2,
      testName: "Physics - Mechanics Practice",
      subject: "Physics",
      duration: "45 minutes",
      questions: 25,
      difficulty: "Intermediate",
      attempts: 2,
      bestScore: 78,
      lastAttempt: "2024-01-15",
      status: "Available"
    },
    {
      id: 3,
      testName: "Computer Science - Algorithms",
      subject: "Computer Science",
      duration: "90 minutes",
      questions: 40,
      difficulty: "Advanced",
      attempts: 1,
      bestScore: 65,
      lastAttempt: "2024-01-12",
      status: "Available"
    },
    {
      id: 4,
      testName: "Chemistry - Periodic Table Mastery",
      subject: "Chemistry",
      duration: "30 minutes",
      questions: 20,
      difficulty: "Beginner",
      attempts: 0,
      bestScore: 0,
      lastAttempt: "-",
      status: "Available"
    },
    {
      id: 5,
      testName: "English - Vocabulary Builder",
      subject: "English",
      duration: "40 minutes",
      questions: 35,
      difficulty: "Intermediate",
      attempts: 4,
      bestScore: 92,
      lastAttempt: "2024-01-20",
      status: "Available"
    },
    {
      id: 6,
      testName: "Mathematics - Calculus Challenge",
      subject: "Mathematics",
      duration: "75 minutes",
      questions: 35,
      difficulty: "Advanced",
      attempts: 0,
      bestScore: 0,
      lastAttempt: "-",
      status: "Coming Soon"
    }
  ];

  const [selectedTest, setSelectedTest] = useState(null);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return '#4caf50';
      case 'Intermediate': return '#ff9800';
      case 'Advanced': return '#f44336';
      default: return '#757575';
    }
  };

  const getStatusColor = (status) => {
    return status === 'Available' ? '#4caf50' : 
           status === 'Coming Soon' ? '#ff9800' : '#757575';
  };

  const handleStartTest = (test) => {
    if (test.status === 'Available') {
      alert(`Starting: ${test.testName}\nDuration: ${test.duration}\nQuestions: ${test.questions}`);
      // In real application, navigate to test interface
    } else {
      alert('This test is not available yet. Coming soon!');
    }
  };

  const handleViewDetails = (test) => {
    setSelectedTest(test);
  };

  const availableTests = practiceTests.filter(test => test.status === 'Available');
  const comingSoonTests = practiceTests.filter(test => test.status === 'Coming Soon');

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
              <li onClick={() => navigate("/quiz-results")}>Quiz Results</li>
              <li onClick={() => navigate("/exam-schedule")}>Exam Schedule</li>
              <li className="active">Practice Tests</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Practice Stats</h3>
            <div className="stats-card">
              <div className="stat-item">
                <span className="stat-value">{availableTests.length}</span>
                <span className="stat-label">Available Tests</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">10</span>
                <span className="stat-label">Total Attempts</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">80%</span>
                <span className="stat-label">Avg. Score</span>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              <button className="action-btn" onClick={() => alert('Feature coming soon!')}>
                📊 View Progress Report
              </button>
              <button className="action-btn" onClick={() => alert('Feature coming soon!')}>
                🎯 Weak Areas Analysis
              </button>
              <button className="action-btn" onClick={() => alert('Feature coming soon!')}>
                ⏱️ Time Management Tips
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="exams-content">
          <div className="content-header">
            <h2>Practice Tests</h2>
            <p>Enhance your knowledge with these practice tests and improve your exam performance</p>
          </div>

          <div className="practice-summary">
            <div className="summary-card">
              <h4>📚 Your Practice Journey</h4>
              <div className="practice-stats">
                <div className="practice-item">
                  <span className="practice-value">5/6</span>
                  <span className="practice-label">Tests Available</span>
                </div>
                <div className="practice-item">
                  <span className="practice-value">10</span>
                  <span className="practice-label">Total Attempts</span>
                </div>
                <div className="practice-item">
                  <span className="practice-value">80%</span>
                  <span className="practice-label">Average Score</span>
                </div>
                <div className="practice-item">
                  <span className="practice-value">3</span>
                  <span className="practice-label">Subjects Covered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Available Tests */}
          <div className="tests-section">
            <h3>Available Practice Tests ({availableTests.length})</h3>
            <div className="tests-grid">
              {availableTests.map((test) => (
                <div key={test.id} className="test-card">
                  <div className="test-header">
                    <h4>{test.testName}</h4>
                    <span 
                      className="difficulty-badge"
                      style={{ backgroundColor: getDifficultyColor(test.difficulty) }}
                    >
                      {test.difficulty}
                    </span>
                  </div>
                  
                  <div className="test-details">
                    <div className="detail-item">
                      <span className="detail-label">Subject:</span>
                      <span className="detail-value">{test.subject}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{test.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Questions:</span>
                      <span className="detail-value">{test.questions}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Attempts:</span>
                      <span className="detail-value">{test.attempts}</span>
                    </div>
                    {test.attempts > 0 && (
                      <div className="detail-item">
                        <span className="detail-label">Best Score:</span>
                        <span className="detail-value score">{test.bestScore}%</span>
                      </div>
                    )}
                    <div className="detail-item">
                      <span className="detail-label">Last Attempt:</span>
                      <span className="detail-value">{test.lastAttempt}</span>
                    </div>
                  </div>

                  <div className="test-actions">
                    <button 
                      className="start-btn"
                      onClick={() => handleStartTest(test)}
                    >
                      {test.attempts > 0 ? 'Retake Test' : 'Start Test'}
                    </button>
                    <button 
                      className="details-btn"
                      onClick={() => handleViewDetails(test)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Tests */}
          {comingSoonTests.length > 0 && (
            <div className="tests-section">
              <h3>Coming Soon ({comingSoonTests.length})</h3>
              <div className="tests-grid">
                {comingSoonTests.map((test) => (
                  <div key={test.id} className="test-card coming-soon">
                    <div className="test-header">
                      <h4>{test.testName}</h4>
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(test.status) }}
                      >
                        {test.status}
                      </span>
                    </div>
                    
                    <div className="test-details">
                      <div className="detail-item">
                        <span className="detail-label">Subject:</span>
                        <span className="detail-value">{test.subject}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Duration:</span>
                        <span className="detail-value">{test.duration}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Questions:</span>
                        <span className="detail-value">{test.questions}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Difficulty:</span>
                        <span className="detail-value">{test.difficulty}</span>
                      </div>
                    </div>

                    <div className="test-actions">
                      <button className="coming-soon-btn" disabled>
                        Coming Soon
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Test Details Modal */}
          {selectedTest && (
            <div className="modal-overlay">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>Test Details</h3>
                  <button className="close-btn" onClick={() => setSelectedTest(null)}>×</button>
                </div>
                <div className="modal-body">
                  <h4>{selectedTest.testName}</h4>
                  <div className="modal-details">
                    <div className="modal-row">
                      <span>Subject:</span>
                      <span>{selectedTest.subject}</span>
                    </div>
                    <div className="modal-row">
                      <span>Duration:</span>
                      <span>{selectedTest.duration}</span>
                    </div>
                    <div className="modal-row">
                      <span>Questions:</span>
                      <span>{selectedTest.questions}</span>
                    </div>
                    <div className="modal-row">
                      <span>Difficulty:</span>
                      <span>{selectedTest.difficulty}</span>
                    </div>
                    <div className="modal-row">
                      <span>Attempts:</span>
                      <span>{selectedTest.attempts}</span>
                    </div>
                    {selectedTest.attempts > 0 && (
                      <>
                        <div className="modal-row">
                          <span>Best Score:</span>
                          <span className="best-score">{selectedTest.bestScore}%</span>
                        </div>
                        <div className="modal-row">
                          <span>Last Attempt:</span>
                          <span>{selectedTest.lastAttempt}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="modal-actions">
                    <button 
                      className="start-btn"
                      onClick={() => {
                        handleStartTest(selectedTest);
                        setSelectedTest(null);
                      }}
                    >
                      {selectedTest.attempts > 0 ? 'Retake Test' : 'Start Test'}
                    </button>
                    <button className="close-modal-btn" onClick={() => setSelectedTest(null)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Practice Tips */}
          <div className="practice-tips">
            <h3>💡 Practice Test Tips</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <h4>⏱️ Time Management</h4>
                <p>Divide your time according to the number of questions. Don't spend too much time on one question.</p>
              </div>
              <div className="tip-card">
                <h4>📝 Review Answers</h4>
                <p>Always review your answers if time permits. Double-check calculations and reasoning.</p>
              </div>
              <div className="tip-card">
                <h4>🎯 Focus on Weak Areas</h4>
                <p>Use practice tests to identify and improve your weak subject areas.</p>
              </div>
              <div className="tip-card">
                <h4>📊 Analyze Performance</h4>
                <p>Review your test results to understand patterns in mistakes and improve accordingly.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PracticeTests;