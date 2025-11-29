import React from "react";
import { useNavigate } from "react-router-dom";
import "./Exams.css";

function ExamSchedule() {
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

  // Sample exam schedule data
  const examSchedule = [
    {
      id: 1,
      examName: "Mid-Term Examination - Mathematics",
      subject: "Mathematics",
      date: "2024-02-15",
      time: "09:00 AM - 12:00 PM",
      duration: "3 hours",
      venue: "Exam Hall A",
      type: "Written",
      status: "Upcoming",
      importance: "High"
    },
    {
      id: 2,
      examName: "Physics Practical Exam",
      subject: "Physics",
      date: "2024-02-18",
      time: "02:00 PM - 04:00 PM",
      duration: "2 hours",
      venue: "Physics Lab 3",
      type: "Practical",
      status: "Upcoming",
      importance: "High"
    },
    {
      id: 3,
      examName: "Computer Science Theory",
      subject: "Computer Science",
      date: "2024-02-20",
      time: "10:00 AM - 01:00 PM",
      duration: "3 hours",
      venue: "Exam Hall B",
      type: "Written",
      status: "Upcoming",
      importance: "High"
    },
    {
      id: 4,
      examName: "Chemistry Viva",
      subject: "Chemistry",
      date: "2024-02-22",
      time: "11:00 AM - 01:00 PM",
      duration: "2 hours",
      venue: "Chemistry Department",
      type: "Viva",
      status: "Upcoming",
      importance: "Medium"
    },
    {
      id: 5,
      examName: "English Language Test",
      subject: "English",
      date: "2024-02-25",
      time: "09:30 AM - 11:30 AM",
      duration: "2 hours",
      venue: "Exam Hall C",
      type: "Written",
      status: "Upcoming",
      importance: "Medium"
    },
    {
      id: 6,
      examName: "Mathematics Quiz 1",
      subject: "Mathematics",
      date: "2024-01-15",
      time: "10:00 AM - 11:00 AM",
      duration: "1 hour",
      venue: "Classroom 301",
      type: "Quiz",
      status: "Completed",
      importance: "Low"
    }
  ];

  const getStatusColor = (status) => {
    return status === 'Upcoming' ? '#4caf50' : '#757575';
  };

  const getImportanceColor = (importance) => {
    switch(importance) {
      case 'High': return '#f44336';
      case 'Medium': return '#ff9800';
      case 'Low': return '#4caf50';
      default: return '#757575';
    }
  };

  const upcomingExams = examSchedule.filter(exam => exam.status === 'Upcoming');
  const completedExams = examSchedule.filter(exam => exam.status === 'Completed');

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
              <li className="active">Exam Schedule</li>
              <li onClick={() => navigate("/practice-tests")}>Practice Tests</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Quick Overview</h3>
            <div className="stats-card">
              <div className="stat-item">
                <span className="stat-value">{upcomingExams.length}</span>
                <span className="stat-label">Upcoming Exams</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">5</span>
                <span className="stat-label">This Month</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">3</span>
                <span className="stat-label">High Priority</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="exams-content">
          <div className="content-header">
            <h2>Exam Schedule</h2>
            <p>View your complete examination timetable</p>
          </div>

          <div className="schedule-summary">
            <div className="summary-card">
              <h4>📅 February 2024 Schedule</h4>
              <div className="schedule-stats">
                <div className="schedule-item">
                  <span className="schedule-value">5</span>
                  <span className="schedule-label">Exams Scheduled</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-value">3</span>
                  <span className="schedule-label">Written Exams</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-value">2</span>
                  <span className="schedule-label">Practical/Viva</span>
                </div>
              </div>
            </div>
          </div>

          <div className="schedule-table-container">
            <h3>Upcoming Exams ({upcomingExams.length})</h3>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Exam Name</th>
                  <th>Subject</th>
                  <th>Date & Time</th>
                  <th>Duration</th>
                  <th>Venue</th>
                  <th>Type</th>
                  <th>Importance</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {upcomingExams.map((exam) => (
                  <tr key={exam.id}>
                    <td className="exam-name">{exam.examName}</td>
                    <td className="subject">{exam.subject}</td>
                    <td className="datetime">
                      <div>{exam.date}</div>
                      <div className="time">{exam.time}</div>
                    </td>
                    <td className="duration">{exam.duration}</td>
                    <td className="venue">{exam.venue}</td>
                    <td className="type">{exam.type}</td>
                    <td className="importance">
                      <span 
                        className="importance-badge"
                        style={{ backgroundColor: getImportanceColor(exam.importance) }}
                      >
                        {exam.importance}
                      </span>
                    </td>
                    <td className="status">
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(exam.status) }}
                      >
                        {exam.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {completedExams.length > 0 && (
            <div className="completed-exams">
              <h3>Recently Completed Exams</h3>
              <table className="schedule-table completed">
                <thead>
                  <tr>
                    <th>Exam Name</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {completedExams.map((exam) => (
                    <tr key={exam.id}>
                      <td className="exam-name">{exam.examName}</td>
                      <td className="subject">{exam.subject}</td>
                      <td className="date">{exam.date}</td>
                      <td className="type">{exam.type}</td>
                      <td className="status">
                        <span className="status-badge completed">
                          {exam.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="exam-reminders">
            <h3>📋 Important Reminders</h3>
            <div className="reminders-list">
              <div className="reminder-item">
                <span className="reminder-icon">⏰</span>
                <span>Arrive 30 minutes before exam time</span>
              </div>
              <div className="reminder-item">
                <span className="reminder-icon">📝</span>
                <span>Bring your student ID and hall ticket</span>
              </div>
              <div className="reminder-item">
                <span className="reminder-icon">📚</span>
                <span>Check required materials for practical exams</span>
              </div>
              <div className="reminder-item">
                <span className="reminder-icon">📱</span>
                <span>Electronic devices not allowed in exam hall</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ExamSchedule;