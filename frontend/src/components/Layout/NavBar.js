import React, {useState} from 'react';
import '../../styles/NavBar.css';

function NavBar() {
  const [searchQuery, setSearchQuery] = useState(''); // Initialize the state for the input value

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // Update the state when the input changes
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Performing a fake search for:', searchQuery); // Log the search term to the console
      setSearchQuery(''); // Clear the search bar
      event.preventDefault(); // Prevent the default form submission if this input is part of a form
    }
  };

  return (
    <div className="navbar">
      <img src="./images/logo.png" alt="Logo" className="logo" />
      <div className="searchContainer">
        <img src="./images/search.png" alt="Search Icon" className="searchIcon" />
        <input 
        type="text" 
        className="searchBar" 
        placeholder="Search" 
        value={searchQuery} // Bind the input value to the state
        onChange={handleInputChange} // Update the state when the input changes
        onKeyDown={handleKeyDown} // Listen for key presses
        />
      </div>
      <img src="./images/nwhacks.jpg" alt="User" className="userPhoto" />
    </div>
  );
}


export default NavBar;