import {React , useState} from "react";
//import useState from "react";
import CardStyles from "../styles/CardStyles.css";
import logo from '../logo.svg';

export default function Card() {
        const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
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
        className="bottomstyled"
        onClick={handleClick}>
            Join Event
        </button>
        </div>

        
    );
}