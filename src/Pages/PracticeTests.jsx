import React from "react";
import BasePage from "./BasePage";

function PracticeTests() {
  return (
    <BasePage 
      title="Practice Tests" 
      description="Access practice tests and mock exams"
      activeItem="practice-tests"
    >
      <div className="empty-content">
        <h3>Practice Tests Content</h3>
        <p>Practice tests will appear here.</p>
      </div>
    </BasePage>
  );
}

export default PracticeTests;