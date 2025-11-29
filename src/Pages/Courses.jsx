import React from "react";
import BasePage from "./BasePage";

// Import images directly
import dbmsImage from '../assets/dbms.png';
import oopsImage from '../assets/oops.png';
import fedImage from '../assets/fed.png';
import psImage from '../assets/ps.png';
import oseImage from '../assets/ose.png';
import osImage from '../assets/os.png';
import aimlImage from '../assets/aiml.png';
import lmsImage from '../assets/lms.png';

function Courses() {
  const courses = [
    {
      id: 1,
      title: "Database Management System",
      description: "Learn about database design, SQL, normalization, and database administration.",
      instructor: "Dr. Sarah Chen",
      provider: "Amazon",
      rating: 4,
      progress: 75,
      duration: "8 weeks",
      level: "Intermediate",
      image: dbmsImage
    },
    {
      id: 2,
      title: "Object Oriented Programming",
      description: "Master OOP concepts, design patterns, and software development principles.",
      instructor: "Dr. James Wilson",
      provider: "Microsoft",
      rating: 4,
      progress: 60,
      duration: "10 weeks",
      level: "Beginner",
      image: oopsImage
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "Build modern web applications using React, HTML, CSS, and JavaScript.",
      instructor: "Jessica Lee",
      provider: "Meta",
      rating: 4,
      progress: 90,
      duration: "12 weeks",
      level: "Intermediate",
      image: fedImage
    },
    {
      id: 4,
      title: "Probability and Statistics",
      description: "Understand statistical analysis, probability theory, and data interpretation.",
      instructor: "Dr. Emily Parker",
      provider: "Stanford",
      rating: 4,
      progress: 30,
      duration: "6 weeks",
      level: "Advanced",
      image: psImage
    },
    {
      id: 5,
      title: "Open Source Engineering",
      description: "Contribute to open source projects and learn collaborative development.",
      instructor: "David Kim",
      provider: "GitHub",
      rating: 4,
      progress: 25,
      duration: "8 weeks",
      level: "Intermediate",
      image: oseImage
    },
    {
      id: 6,
      title: "Operating System",
      description: "Learn about process management, memory allocation, and system architecture.",
      instructor: "Prof. Robert Brown",
      provider: "MIT",
      rating: 5,
      progress: 85,
      duration: "10 weeks",
      level: "Advanced",
      image: osImage
    },
    {
      id: 7,
      title: "Artificial Intelligence",
      description: "Explore AI algorithms, neural networks, and machine learning models.",
      instructor: "Prof. Michael Rodriguez",
      provider: "Google",
      rating: 5,
      progress: 40,
      duration: "14 weeks",
      level: "Advanced",
      image: aimlImage
    }
  ];

  // Debug function to check if images are loading
  const handleImageError = (e, courseTitle) => {
    console.error(`Failed to load image for: ${courseTitle}`, e.target.src);
    e.target.src = lmsImage;
    e.target.alt = `Fallback image for ${courseTitle}`;
  };

  const handleImageLoad = (e, courseTitle) => {
    console.log(`Successfully loaded image for: ${courseTitle}`);
  };

  return (
    <BasePage 
      title="My Courses" 
      description="Continue your learning journey"
      activeItem="courses"
    >
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img 
              src={course.image} 
              alt={course.title}
              className="course-image"
              onError={(e) => handleImageError(e, course.title)}
              onLoad={(e) => handleImageLoad(e, course.title)}
            />
            <div className="course-header">
              <div className="course-provider">{course.provider}</div>
              <span className={`course-level ${course.level.toLowerCase()}`}>
                {course.level}
              </span>
            </div>
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span className="course-instructor">👤 {course.instructor}</span>
                <span className="course-duration">⏱️ {course.duration}</span>
              </div>
              <div className="course-rating">
                {"★".repeat(course.rating)}{"☆".repeat(5 - course.rating)}
              </div>
              <div className="progress-section">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="progress-text">{course.progress}% Complete</div>
              </div>
              <button className="continue-btn">Continue Learning</button>
            </div>
          </div>
        ))}
      </div>
    </BasePage>
  );
}

export default Courses;