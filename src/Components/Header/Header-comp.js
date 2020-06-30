import React from 'react';
import './Header-style.scss';
import {Link} from 'react-router-dom';
import logo from "../../images/rezi_rent_logo.png";


const Header = () => {
    return (
        <div className="wrapper">
            <div className="left"> 
                <div className="logo">
                    <img src={logo} height="35px" alt="logo"/>
                </div>
                <div className="navBar">
                    <Link className="headerLink" to="/landlords">LANDLORDS</Link>
                    <Link className="headerLink" to="/tenants">TENANTS</Link>
                    <Link className="headerLink" to="/about">ABOUT US</Link>
                </div>
            </div>
            <div className="right">
                <div className="search">
                    <Link className="headerLink" to="/">APARTMENTS</Link>   
                </div>
                <div className="LogIn">
                    <Link className="headerLink" to="/">LOG IN</Link>
                </div>
            </div>
           
        </div>
    )
    };

export default Header;