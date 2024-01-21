import React from "react";
import Card from "./Card";
import '../../styles/GridStyles.css';


/* For future: Put the div className stuff into a 
   separate function so it's easier to do the map :D

   Each grid-container is its own row
*/
export default function Section() {
    function displayCard() {
        <div className="grid-item"> 
            <Card />
            </div>
    }
    
    return (
        <div>
        <div className="title-item">
        Popular 
        </div> 
        <div className="grid-container">
            <div className="grid-item">
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
        </div>
        <div className="title-item">
        This Week
        </div>
        <div className="grid-container">
            <div className="grid-item"> 
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
            <div className="grid-item">
            <Card />
            </div>
            </div>
        </div>
    );
}