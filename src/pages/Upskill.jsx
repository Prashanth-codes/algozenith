import React, { useState } from 'react';
import TabSwitcher from '../components/TabSwitcher';
import ChapterList from '../components/ChapterList';
import './Update.css';
import arrow from '../assets/arrow.jpg';
import video from '../assets/video.jpg';
import article from '../assets/article.jpeg';
import quiz from '../assets/article.jpeg';
import codex from '../assets/codex2.jpeg'
import clock from '../assets/clock.png';
import contest from '../assets/contest.png';
import upskill from '../assets/upskill.svg';
const chaptersData = {
  "Chapter 1": [
    {
      partTitle: "Part 1",
      description: "Lorem Ipsum Dolor Sit Amet",
      time: "02:00:00",
      difficulty: "Medium",
      resources: [
        { type: "Video", title: "Video 1", duration: "10:00", completed: true, icon: video},
        { type: "Article", title: "Article 1", duration: "10:00", completed: false,icon: article},
        { type: "Quiz", title: "Quiz 1", duration: "10:00", completed: true,icon: quiz },
        { type: "Video", title: "Video 2", duration: "08:00", completed: false,icon: video },
        { type: "Coding Exercise", title: "Exercise 1", duration: "15:00", completed: false,icon: codex },
      ],
      completedPercentage: 45,
    },
    {
      partTitle: "Part 2",
      description: "Understanding Core Concepts",
      time: "01:30:00",
      difficulty: "Medium",
      resources: [
        { type: "Video", title: "Video 2", duration: "08:00", completed: false,icon: video },
        { type: "Coding Exercise", title: "Exercise 1", duration: "15:00", completed: false,icon: codex },
      ],
      completedPercentage: 30,
    },
    {
      partTitle: "Part 3",
      description: "Advanced Techniques",
      time: "01:00:00",
      difficulty: "Hard",
      resources: [
        { type: "Article", title: "Advanced Article", duration: "12:00", completed: true,icon: article },
        { type: "Quiz", title: "Quiz 2", duration: "05:00", completed: false,icon: quiz },
      ],
      completedPercentage: 60,
    },
  ],
  "Chapter 2": [
    {
      partTitle: "Part 1",
      description: "Lorem Ipsum Dolor Sit Amet",
      time: "02:00:00",
      difficulty: "Medium",
      resources: [
        { type: "Video", title: "Video 1", duration: "10:00", completed: true,icon: video },
        { type: "Article", title: "Article 1", duration: "10:00", completed: false,icon: article },
        { type: "Quiz", title: "Quiz 1", duration: "10:00", completed: true,icon: quiz },
      ],
      completedPercentage: 45,
    },
    {
      partTitle: "Part 2",
      description: "Understanding Core Concepts",
      time: "01:30:00",
      difficulty: "Medium",
      resources: [
        { type: "Video", title: "Video 2", duration: "08:00", completed: false,icon: video },
        { type: "Coding Exercise", title: "Exercise 1", duration: "15:00", completed: false,icon: codex },
      ],
      completedPercentage: 30,
    },
    {
      partTitle: "Part 3",
      description: "Advanced Techniques",
      time: "01:00:00",
      difficulty: "Hard",
      resources: [
        { type: "Article", title: "Advanced Article", duration: "12:00", completed: true,icon: article },
        { type: "Quiz", title: "Quiz 2", duration: "05:00", completed: false,icon: quiz },
      ],
      completedPercentage: 60,
    },
  ],
  "Chapter 3": [
    {
      partTitle: "Part 1",
      description: "Lorem Ipsum Dolor Sit Amet",
      time: "02:00:00",
      difficulty: "Medium",
      resources: [
        { type: "Video", title: "Video 1", duration: "10:00", completed: true,icon: video },
        { type: "Article", title: "Article 1", duration: "10:00", completed: false,icon: article },
        { type: "Quiz", title: "Quiz 1", duration: "10:00", completed: true,icon: quiz },
      ],
      completedPercentage: 45,
    },
    {
      partTitle: "Part 2",
      description: "Understanding Core Concepts",
      time: "01:30:00",
      difficulty: "Medium",
      resources: [
        { type: "Video", title: "Video 2", duration: "08:00", completed: false,icon: video },
        { type: "Coding Exercise", title: "Exercise 1", duration: "15:00", completed: false,icon: codex },
      ],
      completedPercentage: 30,
    },
    {
      partTitle: "Part 3",
      description: "Advanced Techniques",
      time: "01:00:00",
      difficulty: "Hard",
      resources: [
        { type: "Article", title: "Advanced Article", duration: "12:00", completed: true,icon: article },
        { type: "Quiz", title: "Quiz 2", duration: "05:00", completed: false,icon: quiz },
      ],
      completedPercentage: 60,
    },
  ],
  "Chapter 4": [
    {
      partTitle: "Part 1",
      description: "Lorem Ipsum Dolor Sit Amet",
      time: "02:00:00",
      difficulty: "Medium",
      resources: [
        { type: "Video", title: "Video 1", duration: "10:00", completed: true,icon: video },
        { type: "Article", title: "Article 1", duration: "10:00", completed: false,icon: article },
        { type: "Quiz", title: "Quiz 1", duration: "10:00", completed: true,icon: quiz },
      ],
      completedPercentage: 45,
    },
    {
      partTitle: "Part 2",
      description: "Understanding Core Concepts",
      time: "01:30:00",
      difficulty: "Medium",
      resources: [
        { type: "Video", title: "Video 2", duration: "08:00", completed: false,icon: video },
        { type: "Coding Exercise", title: "Exercise 1", duration: "15:00", completed: false,icon: codex },
      ],
      completedPercentage: 30,
    },
    {
      partTitle: "Part 3",
      description: "Advanced Techniques",
      time: "01:00:00",
      difficulty: "Hard",
      resources: [
        { type: "Article", title: "Advanced Article", duration: "12:00", completed: true,icon: article },
        { type: "Quiz", title: "Quiz 2", duration: "05:00", completed: false,icon: quiz },
      ],
      completedPercentage: 60,
    },
  ],
  "Chapter 5": [
    {
      partTitle: "Part 1",
      description: "Lorem Ipsum Dolor Sit Amet",
      time: "02:00:00",
      difficulty: "Medium",
      resources: [
        { type: "Video", title: "Video 1", duration: "10:00", completed: true,icon: video },
        { type: "Article", title: "Article 1", duration: "10:00", completed: false,icon: article },
        { type: "Quiz", title: "Quiz 1", duration: "10:00", completed: true,icon: quiz },
      ],
      completedPercentage: 45,
    },
    {
      partTitle: "Part 2",
      description: "Understanding Core Concepts",
      time: "01:30:00",
      difficulty: "Medium",
      resources: [
        { type: "Video", title: "Video 2", duration: "08:00", completed: false,icon: video },
        { type: "Coding Exercise", title: "Exercise 1", duration: "15:00", completed: false,icon: codex },
      ],
      completedPercentage: 30,
    },
    {
      partTitle: "Part 3",
      description: "Advanced Techniques",
      time: "01:00:00",
      difficulty: "Hard",
      resources: [
        { type: "Article", title: "Advanced Article", duration: "12:00", completed: true,icon: article },
        { type: "Quiz", title: "Quiz 2", duration: "05:00", completed: false,icon: quiz },
      ],
      completedPercentage: 60,
    },
  ],
  // Add similar data for Chapter 2, Chapter 3, etc.
};

function Update() {
  const [selectedTab, setSelectedTab] = useState("Learning Material");
  const [selectedChapter, setSelectedChapter] = useState("Chapter 1");
  const [expandedPartIndex, setExpandedPartIndex] = useState(null);

  const handlePartClick = (index) => {
    // Toggle expand/collapse for the selected part
    setExpandedPartIndex(index === expandedPartIndex ? null : index);
  };

  return (
    <div className="update-container">
      {/* TabSwitcher for Mentor Sessions and Learning Material */}
      <TabSwitcher 
        tabs={["Mentor Sessions", "Learning Material"]}
        selectedTab={selectedTab} 
        onTabChange={setSelectedTab} 
      />
      
      {/* Conditionally render based on selected tab */}
      {selectedTab === "Learning Material" ? (
        <div className="learning-material">
          {/* Chapter List displayed when Learning Material is selected */}
          <ChapterList 
            chapters={Object.keys(chaptersData)}
            selectedChapter={selectedChapter}
            onChapterSelect={setSelectedChapter} 
          />

          {/* Display content for the selected chapter */}
          <div className="chapter-content">
            {chaptersData[selectedChapter].map((part, index) => (
              <div key={index} className="part">
                <div className="part-header">
                    <div className="heading">
                      <h3>{part.partTitle} <button className="btn" onClick={() => handlePartClick(index)}><img src={arrow} alt='Arrow' className='arrow'/></button></h3>
                    </div>
                    <div className="part-info">
                        <p>{part.description}</p>
                        <span><img src={clock} alt="clock" className='icon'/>{part.time}</span>
                        <span><img src={contest} alt="contest" className='icon'/>{part.difficulty}</span>
                        <span><img src={upskill} alt="upskill" className='icon'/>{part.resources.length}</span>
                      </div>
                      <span className="completion-status">{part.completedPercentage}% done</span>
                      <div className="progress-bar">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${part.completedPercentage}%` }}
    
                        ></div>
                      </div>
                  {expandedPartIndex === index && (
                    <>
                    
                      {part.resources.map((resource, idx) => (
                        <div key={idx} className="resource-item">
                          <span className="resource-type"><img src={resource.icon} alt={`${resource.type} Icon`} className='icon'/>{resource.type}</span>
                          <span className="resource-duration"><img src={clock} alt="clock" className='icon'/>{resource.duration}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mentor-sessions">
          {/* Content for Mentor Sessions */}
          <h2>Mentor Sessions</h2>
          <p>Details about mentor sessions will go here.</p>
        </div>
      )}
    </div>
  );
}

export default Update;
