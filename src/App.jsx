import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Portal from "./Pages/Portal.jsx";
import Courses from "./Pages/Courses.jsx";
import CourseMaterials from "./Pages/CourseMaterials.jsx";
import CourseProgress from "./Pages/CourseProgress.jsx";
import Grades from "./Pages/Grades.jsx";
import DiscussionForum from "./Pages/DiscussionForum.jsx";
import Resources from "./Pages/Resources.jsx";
// ADD THESE IMPORTS
import UpcomingExams from "./Pages/UpcomingExams.jsx";
import QuizResults from "./Pages/QuizResults.jsx";
import ExamSchedule from "./Pages/ExamSchedule.jsx";
import PracticeTests from "./Pages/PracticeTests.jsx";
import PendingAssignments from "./Pages/PendingAssignments.jsx";
// ADD REGISTER IMPORT
import Register from "./Pages/Register.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      {/* ADD REGISTER ROUTE */}
      <Route path="/register" element={<Register />} />
      <Route path="/portal" element={<Portal />} />
      
      {/* Course Section Routes */}
      <Route path="/courses" element={<Courses />} />
      <Route path="/course-materials" element={<CourseMaterials />} />
      <Route path="/course-progress" element={<CourseProgress />} />
      <Route path="/grades" element={<Grades />} />
      <Route path="/discussion-forum" element={<DiscussionForum />} />
      <Route path="/resources" element={<Resources />} />
      
      {/* Exams Section Routes - ADD THESE */}
      <Route path="/upcoming-exams" element={<UpcomingExams />} />
      <Route path="/quiz-results" element={<QuizResults />} />
      <Route path="/exam-schedule" element={<ExamSchedule />} />
      <Route path="/practice-tests" element={<PracticeTests />} />
      
      {/* Assignments Section Routes */}
      <Route path="/pending-assignments" element={<PendingAssignments />} />
      
      {/* Redirect any unknown routes to login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}