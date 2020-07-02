import React from 'react';
import "./HeaderPart-style.scss";
import mice from "../../images/mice.svg";
import arrowDown from "../../images/arrow_down_icon.svg";

const HeaderPart = () => {
    return (
        <div className="headerPartBase">
        <div className="headerPartContainer">
            <h1> Find your next home in <br />minutes, for free.</h1>
            <div className="CityPt2">
                <div className="CitySelectBtn">
                    <h2>City</h2>
                    <h2 className="headerH2Span">Select </h2>
                    <img src={arrowDown} alt="" width="15px"/>
                </div>
                <div className="searchBtn"><h3>Search</h3></div>
            </div>
            
         </div>
         
         <div className="headerPartLearnMore">
            <img src={mice} alt='' width="22px" name='micePicture'/>
            <h3>Learn More</h3>
         </div>
        
        </div>

    )
    };

export default HeaderPart;


