import React from 'react';
import './ProgressCard.css';

function ProgressCard({ title, tasks }) {
  return (
    <div className="progress-card">
      <h4>{title}</h4>
      <div className="progress-bar">
        <span className="progress-complete"></span>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressCard;
