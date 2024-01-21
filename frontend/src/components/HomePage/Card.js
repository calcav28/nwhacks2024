import {React , useState} from "react";
import '../../styles/CardStyles.css';
import logo from '../../logo.svg';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

export default function Card(props) {
    const event = props.event;
    let hasCounted;    
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const eventDate = new Date(event.event_date);
    const eventTimeMinutes = eventDate.getMinutes();
    const eventDisplayMinutes = eventTimeMinutes < 10 ? `0${eventTimeMinutes}` : eventTimeMinutes;
    const eventTimeHours = eventDate.getHours();
    const eventDisplayHours = eventTimeHours < 10 ? `0${eventTimeHours}` : eventTimeHours;
    const displayDate = `${eventDate.getDay() + " " + months[eventDate.getMonth()] + " • " + eventDisplayHours + ":" + eventDisplayMinutes}`;

    function handleClick() {
        if (~hasCounted) {
            hasCounted = true;
            setCount(count + 1);
        } else {
            hasCounted = false;
            setCount(count - 1);
        }
    }

    function togglePopup() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="fillImage">
            <img src={event.image_url} alt="Event Selection" className="selectionPhoto" onClick={togglePopup} />
            <Popup className="event-popup" open={isOpen} closeOnDocumentClick onClose={togglePopup}>
                <div className="event">
                    <div>
                        <img src={event.image_url} alt="Event Selection" className="eventPhoto" />
                    </div>
                    <div className="event-content-container-text">
                        <h4>{displayDate}</h4>
                        <h2>{event.event_title}</h2>
                        <p>{event.event_description}</p>
                        <div className="event-content-container-details">
                            <h4 className="event-content-container-details-location">{event.event_location}</h4>
                            <h4 className="event-content-container-details-attendees">{event.attendees} people are interested</h4>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    );
    
}