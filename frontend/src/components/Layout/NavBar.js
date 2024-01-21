import React from 'react';
import '../../styles/NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <img src="./images/logo.png" alt="Logo" className="logo" />
      <div className="searchContainer">
        <img src="./images/search.png" alt="Search Icon" className="searchIcon" />
        <input type="text" className="searchBar" placeholder="Search" />
      </div>
      <img src="./images/nwhacks.jpg" alt="User" className="userPhoto" />
    </div>
  );
}


export default NavBar;