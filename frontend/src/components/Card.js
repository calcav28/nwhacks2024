import {React , useState} from "react";
//import useState from "react";
import CardStyles from "../styles/CardStyles.css";
import logo from '../logo.svg';

export default function Card() {
    var hasCounted;    
    const [count, setCount] = useState(0);

    function handleClick() {
        if (~hasCounted) {
            hasCounted = true;
            setCount(count + 1);
        } else {
            hasCounted = false;
            setCount(count - 1);
        }
    }
    
    return (
        <div>
        <button className="styled"
                size="lg"
                >
            <img src={logo} alt="Logo" />
            Current attendees: {count}
        
        </button>
        <button 
        size="sm"
        className="bottomstyled"
        onClick={handleClick}>
            Join Event
        </button>
        </div>

    );
}