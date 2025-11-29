import React from "react";
import BasePage from "./BasePage";

function ExamSchedule() {
  return (
    <BasePage 
      title="Exam Schedule" 
      description="View your complete exam schedule"
      activeItem="exam-schedule"
    >
      <div className="empty-content">
        <h3>Exam Schedule Content</h3>
        <p>Your exam schedule will appear here.</p>
      </div>
    </BasePage>
  );
}

export default ExamSchedule;