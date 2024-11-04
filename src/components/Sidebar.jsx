import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import menuicon from '../assets/menuicon.png';
import dashboard from '../assets/dashboard.png';
import learn from '../assets/learn.webp';
import forum from '../assets/forum.webp';
import upskill from '../assets/upskill.svg';
import contest from '../assets/contest.png';
import leader from '../assets/leader.jpg';
function Sidebar() {
  const [activeButton, setActiveButton] = useState('/');

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  return (
    <div className="sidebar">
      <h2><img src={menuicon} alt="Menu Icon" className="menu-icon" /> AlgoZenith</h2>
      <div className="button-container">
        <button 
          className={activeButton === '/' ? 'active clicked' : 'inactive'}
          onClick={() => handleButtonClick('/')}
        >
          <NavLink to="/" exact="true"><img src={dashboard} alt="Dashboard" className='dashboard'/>Dashboard</NavLink>
        </button>
        
        <button 
          className={activeButton === '/learn' ? 'active clicked' : 'inactive'}
          onClick={() => handleButtonClick('/learn')}
        >
          <NavLink to="/learn"><img src={learn} alt="Learn" className='learn'/>
          Learn</NavLink>
        </button>
        
        <button 
          className={activeButton === '/forum' ? 'active clicked' : 'inactive'}
          onClick={() => handleButtonClick('/forum')}
        >
          <NavLink to="/forum"><img src={forum} alt="Forum" className='forum'/>Forums</NavLink>
        </button>
        
        <button 
          className={activeButton === '/upskill' ? 'active clicked' : 'inactive'}
          onClick={() => handleButtonClick('/upskill')}
        >
          <NavLink to="/upskill"><img src={upskill} alt="Upskill" className='upskill'/>Upskill</NavLink>
        </button>
        
        <button 
          className={activeButton === '/contest' ? 'active clicked' : 'inactive'}
          onClick={() => handleButtonClick('/contest')}
        >
          <NavLink to="/contest"><img src={contest} alt="Contest" className='contest'/>Contest</NavLink>
        </button>
        
        <button 
          className={activeButton === '/leaderboard' ? 'active clicked' : 'inactive'}
          onClick={() => handleButtonClick('/leaderboard')}
        >
          <NavLink to="/leaderboard"><img src={leader} alt="Leader" className='leader' />Leaderboard</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
