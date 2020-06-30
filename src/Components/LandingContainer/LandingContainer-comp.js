import React from 'react';
import "./LandingContainer-style.scss";
import Header from "../Header/Header-comp"
import HeaderPart from "../HeaderPart/HeaderPart-comp"

const LandingContainer = () => {
    return (
        <div className="landingContainer">
            <Header />
            <HeaderPart />
      </div>
    )
};

export default LandingContainer;