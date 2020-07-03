import React from 'react';
import "./InfoNoBg-style.scss";
import AnimatedBox from "../AnimatedBox/animatedBox-comp";

const InfoNoBg = ({anim}) => {
    return (
        <div className="InfoNoBgContainer" id="test" anim="">
            <div className={anim? "left":("left faded")}>
            <h1>See apartments on <i>your</i> time.</h1>
            <p>You can browse our apartments online, take virtual tours, and, when you're ready, schedule on-demand showings to see your next home.</p>
            </div>
            <div className="right">
                <AnimatedBox anim={anim} />
            </div>
        </div>
    )
};

export default InfoNoBg;