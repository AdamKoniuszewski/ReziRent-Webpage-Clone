import React from "react";
import "./animatedBox-style.scss";
import visitorCard from '../../images/visitorCard.png';

const AnimatedBox = ({anim}) => {
    return (
        <div className="animatedContainer">
            <div className={anim? "animatedBox animate": "animatedBox"}>
                <h2> Select your preferred appointment time</h2>
                <div className="animatedBoxDate">
                <h4>Tomorrow</h4>
                <h1>Monday</h1>
                </div>
                <div className="animatedBoxDate">
                <h4>April 23rd</h4>
                <h1>Tuesday</h1>
                </div>
                <div className="animatedBoxDate">
                <h4>April 24th</h4>
                <h1>Wednesday</h1>
                </div>
                <div className="animatedBoxDate">
                <h4>April 25th</h4>
                <h1>Thursday</h1>
                </div>
                <div className="animatedBoxDate">
                <h4>April 26th</h4>
                <h1>Friday</h1>
                </div>
            </div>
            <div className={anim? "animatedCard animate": "animatedCard"}>
                   <img src={visitorCard}width="300px" height="auto" alt="" /> 
            </div>
        </div>
    )
};

export default AnimatedBox;