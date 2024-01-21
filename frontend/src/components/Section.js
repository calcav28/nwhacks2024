import React from "react";
import Card from "./Card";
import GridComponent from "../styles/GridComponent.css";

export default function Section() {
    return (
        <div className="grid-container">
            <div className="grid-item">
            <Card />
            </div>
        </div>
    );
}