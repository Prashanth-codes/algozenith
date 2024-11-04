import React from 'react';
import ProgressCard from './ProgressCard';
import './ContentSection.css';

function ContentSection() {
  return (
    <div className="content-section">
      <ProgressCard title="Part 1" tasks={["Video", "Article", "Quiz"]} />
      <ProgressCard title="Part 2" tasks={["Coding Exercise 1", "Combined Resource"]} />
      <ProgressCard title="Part 3" tasks={["Assignment", "Quiz"]} />
    </div>
  );
}

export default ContentSection;
