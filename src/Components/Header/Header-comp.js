import React from 'react';
import './Header-style.scss';
import {Link} from 'react-router-dom';
import logo from "../../images/rezi_rent_logo.png";


const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="left">       
                    <img src={logo} height="28px" alt="logo"/>
                <div className="navBar">
                    <Link className="headerLink" to="/landlords">LANDLORDS</Link>
                    <Link className="headerLink" to="/tenants">TENANTS</Link>
                    <Link className="headerLink" to="/about">ABOUT US</Link>
                </div>
            </div>
            <div className="right">
                <div className="search">
                    <Link className="headerLink" to="/apartments">APARTMENTS</Link>   
                </div>
                <div className="LogIn">
                    <Link className="headerLink" to="/login">LOG IN</Link>
                </div>
            </div>
           
        </div>
    )
    };

export default Header;