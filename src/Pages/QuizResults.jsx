import React from "react";
import BasePage from "./BasePage";

function QuizResults() {
  return (
    <BasePage 
      title="Quiz Results" 
      description="Review your quiz performances and results"
      activeItem="quiz-results"
    >
      <div className="empty-content">
        <h3>Quiz Results Content</h3>
        <p>Your quiz results will appear here.</p>
      </div>
    </BasePage>
  );
}

export default QuizResults;