import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Assignments.css";

function PendingAssignments() {
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

  // Sample pending assignments data
  const pendingAssignments = [
    {
      id: 1,
      assignmentName: "Mathematics Problem Set - Calculus",
      subject: "Mathematics",
      dueDate: "2024-02-05",
      dueTime: "11:59 PM",
      status: "Pending",
      priority: "High",
      estimatedTime: "4 hours",
      submissionType: "PDF Upload",
      marks: 25,
      description: "Solve problems on differential equations and integration techniques"
    },
    {
      id: 2,
      assignmentName: "Physics Lab Report - Thermodynamics",
      subject: "Physics",
      dueDate: "2024-02-08",
      dueTime: "05:00 PM",
      status: "Pending",
      priority: "High",
      estimatedTime: "3 hours",
      submissionType: "Lab Report",
      marks: 30,
      description: "Write detailed lab report on heat transfer experiments"
    },
    {
      id: 3,
      assignmentName: "Computer Science Programming Assignment",
      subject: "Computer Science",
      dueDate: "2024-02-12",
      dueTime: "11:59 PM",
      status: "In Progress",
      priority: "Medium",
      estimatedTime: "6 hours",
      submissionType: "Code Submission",
      marks: 50,
      description: "Implement sorting algorithms and analyze time complexity"
    },
    {
      id: 4,
      assignmentName: "Chemistry Research Paper",
      subject: "Chemistry",
      dueDate: "2024-02-15",
      dueTime: "11:59 PM",
      status: "Not Started",
      priority: "Medium",
      estimatedTime: "8 hours",
      submissionType: "Research Paper",
      marks: 40,
      description: "Research and write about organic chemistry compounds"
    },
    {
      id: 5,
      assignmentName: "English Essay - Modern Literature",
      subject: "English",
      dueDate: "2024-02-20",
      dueTime: "11:59 PM",
      status: "Not Started",
      priority: "Low",
      estimatedTime: "5 hours",
      submissionType: "Essay",
      marks: 35,
      description: "Analyze themes in modern literary works (1500 words)"
    },
    {
      id: 6,
      assignmentName: "Mathematics Linear Algebra Problems",
      subject: "Mathematics",
      dueDate: "2024-02-25",
      dueTime: "11:59 PM",
      status: "Not Started",
      priority: "Low",
      estimatedTime: "3 hours",
      submissionType: "PDF Upload",
      marks: 20,
      description: "Solve matrix operations and vector space problems"
    }
  ];

  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [filter, setFilter] = useState("All");

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return '#f44336';
      case 'Medium': return '#ff9800';
      case 'Low': return '#4caf50';
      default: return '#757575';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'In Progress': return '#2196f3';
      case 'Pending': return '#ff9800';
      case 'Not Started': return '#f44336';
      case 'Completed': return '#4caf50';
      default: return '#757575';
    }
  };

  const handleStartAssignment = (assignment) => {
    alert(`Starting: ${assignment.assignmentName}\nDue: ${assignment.dueDate} at ${assignment.dueTime}`);
    // In real application, navigate to assignment interface
  };

  const handleViewDetails = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const filteredAssignments = filter === "All" 
    ? pendingAssignments 
    : pendingAssignments.filter(assignment => assignment.status === filter);

  const highPriorityCount = pendingAssignments.filter(a => a.priority === 'High').length;
  const totalMarks = pendingAssignments.reduce((sum, assignment) => sum + assignment.marks, 0);

  return (
    <div className="assignments-container">
      {/* Header */}
      <header className="assignments-header">
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

      <div className="assignments-main">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Assignments</h3>
            <ul>
              <li className="active">Pending Assignments</li>
              <li onClick={() => alert('Feature coming soon!')}>Submitted Assignments</li>
              <li onClick={() => alert('Feature coming soon!')}>Graded Assignments</li>
              <li onClick={() => alert('Feature coming soon!')}>Assignment Calendar</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Quick Stats</h3>
            <div className="stats-card">
              <div className="stat-item">
                <span className="stat-value">{pendingAssignments.length}</span>
                <span className="stat-label">Pending</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{highPriorityCount}</span>
                <span className="stat-label">High Priority</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{totalMarks}</span>
                <span className="stat-label">Total Marks</span>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Filter by Status</h3>
            <div className="filter-options">
              <button 
                className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
                onClick={() => setFilter('All')}
              >
                All ({pendingAssignments.length})
              </button>
              <button 
                className={`filter-btn ${filter === 'In Progress' ? 'active' : ''}`}
                onClick={() => setFilter('In Progress')}
              >
                In Progress ({pendingAssignments.filter(a => a.status === 'In Progress').length})
              </button>
              <button 
                className={`filter-btn ${filter === 'Not Started' ? 'active' : ''}`}
                onClick={() => setFilter('Not Started')}
              >
                Not Started ({pendingAssignments.filter(a => a.status === 'Not Started').length})
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="assignments-content">
          <div className="content-header">
            <h2>Pending Assignments</h2>
            <p>Manage and track all your pending assignments in one place</p>
          </div>

          <div className="assignments-summary">
            <div className="summary-card">
              <h4>📋 Assignment Overview</h4>
              <div className="overview-stats">
                <div className="overview-item">
                  <span className="overview-value">{pendingAssignments.length}</span>
                  <span className="overview-label">Total Pending</span>
                </div>
                <div className="overview-item">
                  <span className="overview-value">{highPriorityCount}</span>
                  <span className="overview-label">High Priority</span>
                </div>
                <div className="overview-item">
                  <span className="overview-value">{totalMarks}</span>
                  <span className="overview-label">Marks at Stake</span>
                </div>
                <div className="overview-item">
                  <span className="overview-value">3</span>
                  <span className="overview-label">Due This Week</span>
                </div>
              </div>
            </div>
          </div>

          <div className="assignments-grid">
            {filteredAssignments.map((assignment) => (
              <div key={assignment.id} className="assignment-card">
                <div className="assignment-header">
                  <div className="assignment-title">
                    <h4>{assignment.assignmentName}</h4>
                    <span className="subject-badge">{assignment.subject}</span>
                  </div>
                  <div className="assignment-meta">
                    <span 
                      className="priority-badge"
                      style={{ backgroundColor: getPriorityColor(assignment.priority) }}
                    >
                      {assignment.priority} Priority
                    </span>
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(assignment.status) }}
                    >
                      {assignment.status}
                    </span>
                  </div>
                </div>
                
                <div className="assignment-details">
                  <div className="detail-row">
                    <span className="detail-label">Due Date:</span>
                    <span className="detail-value deadline">
                      {assignment.dueDate} at {assignment.dueTime}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Estimated Time:</span>
                    <span className="detail-value">{assignment.estimatedTime}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Submission Type:</span>
                    <span className="detail-value">{assignment.submissionType}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Marks:</span>
                    <span className="detail-value marks">{assignment.marks}</span>
                  </div>
                  <div className="description">
                    <span className="detail-label">Description:</span>
                    <p>{assignment.description}</p>
                  </div>
                </div>

                <div className="assignment-actions">
                  <button 
                    className="start-btn"
                    onClick={() => handleStartAssignment(assignment)}
                  >
                    {assignment.status === 'In Progress' ? 'Continue' : 'Start Assignment'}
                  </button>
                  <button 
                    className="details-btn"
                    onClick={() => handleViewDetails(assignment)}
                  >
                    View Details
                  </button>
                </div>

                <div className="assignment-footer">
                  <span className="days-left">
                    {calculateDaysLeft(assignment.dueDate)} days left
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredAssignments.length === 0 && (
            <div className="no-assignments">
              <h3>🎉 No Assignments Found!</h3>
              <p>You have no assignments with the selected filter.</p>
            </div>
          )}

          {/* Assignment Details Modal */}
          {selectedAssignment && (
            <div className="modal-overlay">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>Assignment Details</h3>
                  <button className="close-btn" onClick={() => setSelectedAssignment(null)}>×</button>
                </div>
                <div className="modal-body">
                  <h4>{selectedAssignment.assignmentName}</h4>
                  
                  <div className="modal-details">
                    <div className="modal-row">
                      <span>Subject:</span>
                      <span>{selectedAssignment.subject}</span>
                    </div>
                    <div className="modal-row">
                      <span>Due Date:</span>
                      <span className="deadline">{selectedAssignment.dueDate} at {selectedAssignment.dueTime}</span>
                    </div>
                    <div className="modal-row">
                      <span>Status:</span>
                      <span style={{ color: getStatusColor(selectedAssignment.status) }}>
                        {selectedAssignment.status}
                      </span>
                    </div>
                    <div className="modal-row">
                      <span>Priority:</span>
                      <span style={{ color: getPriorityColor(selectedAssignment.priority) }}>
                        {selectedAssignment.priority}
                      </span>
                    </div>
                    <div className="modal-row">
                      <span>Estimated Time:</span>
                      <span>{selectedAssignment.estimatedTime}</span>
                    </div>
                    <div className="modal-row">
                      <span>Submission Type:</span>
                      <span>{selectedAssignment.submissionType}</span>
                    </div>
                    <div className="modal-row">
                      <span>Marks:</span>
                      <span className="marks">{selectedAssignment.marks}</span>
                    </div>
                    <div className="modal-description">
                      <span>Description:</span>
                      <p>{selectedAssignment.description}</p>
                    </div>
                  </div>

                  <div className="modal-actions">
                    <button 
                      className="start-btn"
                      onClick={() => {
                        handleStartAssignment(selectedAssignment);
                        setSelectedAssignment(null);
                      }}
                    >
                      {selectedAssignment.status === 'In Progress' ? 'Continue Assignment' : 'Start Assignment'}
                    </button>
                    <button className="close-modal-btn" onClick={() => setSelectedAssignment(null)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Assignment Tips */}
          <div className="assignment-tips">
            <h3>💡 Assignment Management Tips</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <h4>⏰ Start Early</h4>
                <p>Begin assignments well before deadlines to avoid last-minute stress and ensure quality work.</p>
              </div>
              <div className="tip-card">
                <h4>📅 Plan Your Time</h4>
                <p>Break down larger assignments into smaller tasks and create a realistic timeline for completion.</p>
              </div>
              <div className="tip-card">
                <h4>🎯 Prioritize</h4>
                <p>Focus on high-priority assignments first and manage your time according to due dates and marks.</p>
              </div>
              <div className="tip-card">
                <h4>📚 Use Resources</h4>
                <p>Utilize available resources like library materials, online databases, and instructor office hours.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Helper function to calculate days left
function calculateDaysLeft(dueDate) {
  const today = new Date();
  const due = new Date(dueDate);
  const timeDiff = due.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysLeft > 0 ? daysLeft : 0;
}

export default PendingAssignments;