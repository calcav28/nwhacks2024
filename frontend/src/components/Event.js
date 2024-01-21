import React from 'react';
import '../styles/Event.css';

function Event() 
{
  return (
    <div className="event">
    <div className = "photoContainer">
    <img src="./images/logo.png" alt="Event Photo" className="eventPhoto" />
    </div>
    <div className = "textContainer">
      <h3>Event:</h3>
      <h3>Location:</h3>
      <h3>Time:</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus imperdiet justo, eget auctor nisi tempus nec. Maecenas rutrum, eros sed pharetra vestibulum, quam eros finibus urna, in imperdiet ante magna non felis. Nullam vehicula mi quis bibendum sollicitudin. Nunc non metus vel enim ultrices dictum. Ut vel urna quis dolor auctor faucibus lobortis eu mi. Nulla facilisi. Sed vel nisi quis nulla congue gravida. Aliquam eleifend et nisi eu ultrices. Nam vel arcu ex. Donec neque elit, tempus nec dolor eget, mollis vulputate elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sit amet dolor vel elit egestas lobortis. Sed ullamcorper aliquet lectus, ut porta leo luctus sed. Morbi dictum pretium semper.
      </p>
    </div>
    </div>
  );
};

export default Event;