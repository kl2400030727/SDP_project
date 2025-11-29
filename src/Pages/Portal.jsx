import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Portal.css";
import portalImage from "../assets/lms1.png";

function Portal() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "2400030727";
  const [showProfile, setShowProfile] = useState(false);

  // Get user data from localStorage (from registration) or use default data
  const registeredUsers = JSON.parse(
    localStorage.getItem("registeredUsers") || "[]"
  );
  const currentUser =
    registeredUsers.find((user) => user.username === username) || {};

  // Default student data for K Snehitha
  const defaultStudentData = {
    firstName: "K",
    lastName: "Snehitha",
    studentId: "2400030727",
    email: "2400030727@kluniversity.in",
    phone: "+91 9876543210",
    dateOfBirth: "2004-05-15",
    gender: "Female",
    course: "Computer Science",
    semester: "3",
    department: "Computer Science and Engineering",
    enrollmentDate: "2023-08-01",
    address: "123 Main Street, Gachibowli",
    city: "Hyderabad",
    state: "Telangana",
    zipCode: "500032",
    country: "India",
  };

  // Merge default data with registered user data
  const studentData = { ...defaultStudentData, ...currentUser };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  // Course Section Navigation
  const navigateToCourses = () => navigate("/courses");
  const navigateToCourseMaterials = () => navigate("/course-materials");
  const navigateToCourseProgress = () => navigate("/course-progress");
  const navigateToGrades = () => navigate("/grades");
  const navigateToDiscussionForum = () => navigate("/discussion-forum");
  const navigateToResources = () => navigate("/resources");

  // Exams Section Navigation
  const navigateToUpcomingExams = () => navigate("/upcoming-exams");
  const navigateToQuizResults = () => navigate("/quiz-results");
  const navigateToExamSchedule = () => navigate("/exam-schedule");
  const navigateToPracticeTests = () => navigate("/practice-tests");

  // Assignments Section Navigation
  const navigateToPendingAssignments = () =>
    navigate("/pending-assignments");

  return (
    <div className="portal-container">
      {/* Header */}
      <header className="portal-header">
        <div className="header-content">
          <h1>Learning Management System</h1>
          <div className="user-info">
            <span>Welcome, {username}</span>

            {/* Profile Icon + Dropdown */}
            <div className="profile-container">
              <div className="profile-icon" onClick={toggleProfile}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              {showProfile && (
                <div className="profile-dropdown">
                  <div className="profile-header">
                    <h3>Student Profile</h3>
                    <button
                      type="button"
                      className="close-profile"
                      onClick={toggleProfile}
                    >
                      ×
                    </button>
                  </div>

                  <div className="profile-content">
                    <div className="profile-section">
                      <h4>Personal Information</h4>
                      <div className="profile-details">
                        <div className="detail-row">
                          <span className="detail-label">Name:</span>
                          <span className="detail-value">
                            {studentData.firstName} {studentData.lastName}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">Student ID:</span>
                          <span className="detail-value">
                            {studentData.studentId}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">Email:</span>
                          <span className="detail-value">
                            {studentData.email}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">Phone:</span>
                          <span className="detail-value">
                            {studentData.phone}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">Date of Birth:</span>
                          <span className="detail-value">
                            {studentData.dateOfBirth}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">Gender:</span>
                          <span className="detail-value">
                            {studentData.gender}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="profile-section">
                      <h4>Academic Information</h4>
                      <div className="profile-details">
                        <div className="detail-row">
                          <span className="detail-label">Course:</span>
                          <span className="detail-value">
                            {studentData.course}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">Semester:</span>
                          <span className="detail-value">
                            Semester {studentData.semester}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">Department:</span>
                          <span className="detail-value">
                            {studentData.department}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">
                            Enrollment Date:
                          </span>
                          <span className="detail-value">
                            {studentData.enrollmentDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="profile-section">
                      <h4>Address Information</h4>
                      <div className="profile-details">
                        <div className="detail-row">
                          <span className="detail-label">Address:</span>
                          <span className="detail-value">
                            {studentData.address}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">City:</span>
                          <span className="detail-value">
                            {studentData.city}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">State:</span>
                          <span className="detail-value">
                            {studentData.state}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">ZIP Code:</span>
                          <span className="detail-value">
                            {studentData.zipCode}
                          </span>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">Country:</span>
                          <span className="detail-value">
                            {studentData.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="portal-main">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Course</h3>
            <ul>
              <li onClick={navigateToCourses}>My Courses</li>
              <li onClick={navigateToCourseMaterials}>Course Materials</li>
              <li onClick={navigateToCourseProgress}>Course Progress</li>
              <li onClick={navigateToGrades}>Grades</li>
              <li onClick={navigateToDiscussionForum}>Discussion Forum</li>
              <li onClick={navigateToResources}>Resources</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Exams</h3>
            <ul>
              <li onClick={navigateToUpcomingExams}>Upcoming Exams</li>
              <li onClick={navigateToQuizResults}>Quiz Results</li>
              <li onClick={navigateToExamSchedule}>Exam Schedule</li>
              <li onClick={navigateToPracticeTests}>Practice Tests</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Assignments</h3>
            <ul>
              <li onClick={navigateToPendingAssignments}>
                Pending Assignments
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content: only image */}
        <main className="main-content">
          <div className="portal-image-wrapper">
            <img src={portalImage} alt="LMS illustration" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Portal;
