import React from 'react';
import "./HeaderPart-style.scss";


const HeaderPart = () => {
    return (
        <div className="headerPartBase">
        <div className="headerPartContainer">
            <h1> Find your next home in minutes, for free.</h1>
            <div className="CityPt2">
                <div className="CitySelectBtn">
                    <h4>City</h4>
                    <h2>Select</h2>
                </div>
                <div className="searchBtn"><h3>Search</h3></div>
            </div>
            
         </div>
         <div className="headerPartLearnMore"><h4>Learn More</h4></div>
        
        </div>

    )
    };

export default HeaderPart;