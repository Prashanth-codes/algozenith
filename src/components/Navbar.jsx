import React from 'react';
import './Navbar.css';
import notify from '../assets/notify.png';
import profile from '../assets/profile.jpg';
function Navbar() {
  return (
    <div className="navbar">
      <div>AZ Hiring Task</div>
      <div className="navbar-options">
        <button><img src={notify} alt="Notify" className='notify'/></button>
        <button><img src={profile} alt="Profile" className='notify'/></button>
      </div>
    </div>
  );
}

export default Navbar;
