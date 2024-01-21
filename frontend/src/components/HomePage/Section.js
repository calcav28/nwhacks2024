import React, { useEffect, useState } from "react";
import Card from "./Card";
import '../../styles/GridStyles.css';

const URL = "http://localhost:6969";


/* For future: Put the div className stuff into a 
   separate function so it's easier to do the map :D

   Each grid-container is its own row
*/
export default function Section(props) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEventContent() {
            const events = await props.fetchEvents();
            setEvents(events);
        }
        fetchEventContent();
    }, []);
    
    return (
        <>
            <div className="title-item">
                <p>{props.title}</p>
            </div>
            <div className="grid-container">
                {events.map((event) => {
                    return (
                        <div className="grid-item">
                            <Card key={event.event_id} event={event} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}