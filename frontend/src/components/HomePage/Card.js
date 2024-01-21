import React from "react";
import '../../styles/CardStyles.css';

export default function Card(props) {
    return (
        <button className="styled" size="lg">
            <img src={props.imgUrl} alt="Event Selection" className="selectionPhoto" />
        </button>
    );
}