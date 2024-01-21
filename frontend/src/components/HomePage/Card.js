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
            <Popup open={isOpen} closeOnDocumentClick onClose={togglePopup}>
                <div className="event">
    <div className = "textContainer">
    <img src={event.image_url} alt="Event Selection" className="selectionPhoto" />
      <h3>Event:    {event.event_title}</h3>
      <h3>Location: {event.event_location}</h3>
      <h3>Time:   {new Date (event.event_date).getDay()}   {months [new Date (event.event_date).getMonth()]}</h3>
      <p>
      {event.event_description}
      </p>
      <h3>{event.attendees} people are interested</h3>
    </div>
                </div>
            </Popup>
        </div>
    );
    
}