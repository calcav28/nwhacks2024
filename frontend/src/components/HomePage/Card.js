import {React , useState} from "react";
import '../../styles/CardStyles.css';
import logo from '../../logo.svg';

export default function Card(props) {
    let hasCounted;    
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
            <button className="styled" size="lg">
                <img src={props.imgUrl} alt="Event Selection" className="selectionPhoto" />
            </button>
        </div>

    );
}