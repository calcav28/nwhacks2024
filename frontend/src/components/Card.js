import React from "react";
import CardStyles from "../styles/CardStyles.css";
import logo from '../logo.svg';

export default function Card() {
    return (
        <button className="styled"
                size="lg">
            Hello Gamers!
            <img src={logo} alt="Logo" />
        </button>
    );
}