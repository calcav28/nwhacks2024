import React from 'react';
import '../style/NavBar.css';

function NavigationBar() 
{
  return (
    <div className="navbar">
      <img src="./images/logo.png" alt="Logo" className="logo" />
      <input type="text" className="search-bar" placeholder="Search for your favorite event" />
      <img src="./images/nwhacks.jpg" alt="User" className="user-photo" />
    </div>
  );
};

export default NavigationBar;