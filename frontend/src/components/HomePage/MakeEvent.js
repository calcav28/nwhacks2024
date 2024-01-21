import React, { useState } from "react";
import '../../styles/CardStyles.css';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';


/* 
On click, will create a popup where user can
create an event 
This will send a post request to mongodb to make a
new event


incase popup ui elements do not work, type this 
into your terminal:
npm install reactjs-popup --save

*/

export default function MakeEvent() {

    const [eventTitle, setEventTitle] = useState("");
    const [clubName, setClubName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [location, setLocation] = useState("");

    async function addEvent() {
        const data = {
            event_title: eventTitle,
            club_name: clubName,
            event_date: (new Date(date)).toISOString(),
            event_description: description,
            image_url: imageURL,
            event_location: location,
            attendees: 0
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        try {
        await fetch("http://localhost:6969/events", requestOptions);    
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
        <div className="plusButton">
            <img src="./images/plus.png" alt="Search Icon" className="plusIcon" />            
            <Popup trigger=
                {<button className="eventbuttonstyle"></button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <h3>CREATE AN EVENT</h3>
                            </div>
                <h4>Event Title</h4>
                <input type="text" className="searchBar" placeholder="" onChange={(e) => setEventTitle(e.target.value)}/>
                <h4>Club Name</h4>
                <input type="text" className="searchBar" placeholder="" onChange={(e) => setClubName(e.target.value)}/>
                <h4>Event Date & Time</h4>
                <input type="datetime-local" className="searchBar" placeholder="" onChange={(e) => setDate(e.target.value)}/>
                <h4>Description</h4>
                <input type="text" className="searchBar" placeholder="" onChange={(e) => setDescription(e.target.value)}/>
                <h4>Image URL</h4>
                <input type="text" className="searchBar" placeholder="" onChange={(e) => setImageURL(e.target.value)}/>
                <h4>Location</h4>
                <input type="text" className="searchBar" placeholder="" onChange={(e) => setLocation(e.target.value)}/>
                <div>
                </div>
                <button onClick={addEvent} className ="addEvent">Add Event</button>
                <div>
                </div>
                                <button onClick=
                                    {() => close()} className="close">
                                        Close
                                </button>
                            </div>
                    )
                }
            </Popup>
        </div>
    );
}