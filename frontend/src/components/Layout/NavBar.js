import React from 'react';
import '../../styles/NavBar.css';

function NavBar() 
{
  return (
    <div className="navbar">
      <img src="./images/logo.png" alt="Logo" className="logo" />
      <input type="text" className="searchBar" placeholder="Search for your favorite event" />
      <img src="./images/nwhacks.jpg" alt="User" className="userPhoto" />
    </div>
  );
};

export default NavBar;