import React from 'react';
import './TabSwitcher.css';
import mentor from '../assets/mentor.jpg';
import mentor2 from '../assets/mentor2.png';
import question from '../assets/question.jpg'
function TabSwitcher({ tabs, selectedTab, onTabChange }) {
  return (
    <div className="tab-switcher">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={tab === selectedTab ? "active-tab" : ""}
            onClick={() => onTabChange(tab)}
          >
            {tab === 'Mentor Sessions' ? (
              <>
                <img src={mentor} alt="Mentor" className="mentor" />
                {tab}
              </>
            ) : (
              <>
                <img src={mentor2} alt="Mentor2" className="mentor" />
                {tab}
              </>
            )}
          </button>
        ))}
      </div>
      <button className="how-it-works-button"><img src={question} alt="Question" className='mentor'/>How it works</button>
    </div>
  );
}

export default TabSwitcher;
