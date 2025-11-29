import React from "react";
import BasePage from "./BasePage";

function PendingAssignments() {
  return (
    <BasePage 
      title="Pending Assignments" 
      description="View and submit your pending assignments"
      activeItem="pending-assignments"
    >
      <div className="empty-content">
        <h3>Pending Assignments Content</h3>
        <p>Your pending assignments will appear here.</p>
      </div>
    </BasePage>
  );
}

export default PendingAssignments;