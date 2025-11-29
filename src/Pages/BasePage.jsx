import React from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css"; // Using same CSS as courses

function BasePage({ title, description, children, activeItem }) {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Student";

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    navigate("/");
  };

  const handleBack = () => {
    navigate("/portal");
  };

  // Navigation functions for all sidebar items
  const navigateToCourses = () => navigate("/courses");
  const navigateToCourseMaterials = () => navigate("/course-materials");
  const navigateToCourseProgress = () => navigate("/course-progress");
  const navigateToGrades = () => navigate("/grades");
  const navigateToDiscussionForum = () => navigate("/discussion-forum");
  const navigateToResources = () => navigate("/resources");
  const navigateToUpcomingExams = () => navigate("/upcoming-exams");
  const navigateToQuizResults = () => navigate("/quiz-results");
  const navigateToExamSchedule = () => navigate("/exam-schedule");
  const navigateToPracticeTests = () => navigate("/practice-tests");
  const navigateToPendingAssignments = () => navigate("/pending-assignments");

  return (
    <div className="courses-container">
      {/* Header */}
      <header className="courses-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={handleBack} className="back-btn">← Back</button>
            <h1>Learning Management System</h1>
          </div>
          <div className="user-info">
            <span>Welcome, {username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <div className="courses-main">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Course</h3>
            <ul>
              <li 
                className={activeItem === 'courses' ? 'active' : ''} 
                onClick={navigateToCourses}
              >
                My Courses
              </li>
              <li 
                className={activeItem === 'materials' ? 'active' : ''} 
                onClick={navigateToCourseMaterials}
              >
                Course Materials
              </li>
              <li 
                className={activeItem === 'progress' ? 'active' : ''} 
                onClick={navigateToCourseProgress}
              >
                Course Progress
              </li>
              <li 
                className={activeItem === 'grades' ? 'active' : ''} 
                onClick={navigateToGrades}
              >
                Grades
              </li>
              <li 
                className={activeItem === 'forum' ? 'active' : ''} 
                onClick={navigateToDiscussionForum}
              >
                Discussion Forum
              </li>
              <li 
                className={activeItem === 'resources' ? 'active' : ''} 
                onClick={navigateToResources}
              >
                Resources
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Exams</h3>
            <ul>
              <li 
                className={activeItem === 'upcoming-exams' ? 'active' : ''} 
                onClick={navigateToUpcomingExams}
              >
                Upcoming Exams
              </li>
              <li 
                className={activeItem === 'quiz-results' ? 'active' : ''} 
                onClick={navigateToQuizResults}
              >
                Quiz Results
              </li>
              <li 
                className={activeItem === 'exam-schedule' ? 'active' : ''} 
                onClick={navigateToExamSchedule}
              >
                Exam Schedule
              </li>
              <li 
                className={activeItem === 'practice-tests' ? 'active' : ''} 
                onClick={navigateToPracticeTests}
              >
                Practice Tests
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Assignments</h3>
            <ul>
              <li 
                className={activeItem === 'pending-assignments' ? 'active' : ''} 
                onClick={navigateToPendingAssignments}
              >
                Pending Assignments
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="courses-content">
          <div className="courses-header-section">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}

export default BasePage;