import React from 'react';
import './Header-style.scss';
import {Link} from 'react-router-dom';
import logo from "../../images/rezi_rent_logo.png";
import loginIcon from "../../images/login.svg";
import searchIcon from "../../images/search.svg"


const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="left">       
                    <img src={logo} height="36px" alt="logo"/>
                <div className="navBar">
                    <Link className="headerLink" to="/landlords">LANDLORDS</Link>
                    <Link className="headerLink" to="/tenants">TENANTS</Link>
                    <Link className="headerLink" to="/about">ABOUT US</Link>
                </div>
            </div>
            <div className="right">
                <div className="search">
                    <Link className="headerLink" to="/apartments">APARTMENTS</Link> 
                    <img src={searchIcon} alt="" width="20px"/>  
                </div>
                <div className="LogIn">
                    <Link className="headerLink" to="/login">LOG IN</Link>
                    <img src={loginIcon} alt="" width="20px"/>
                </div>
            </div>
           
        </div>
    )
    };

export default Header;