import React from "react";
import "./Footer-style.scss";
import footerLogo from "../../images/Rezi Footer Logo.png";
import CustomLink from "../../Components/CustomLink/CustomLink-comp";
import FbLogo from "../../images/social_facebook.svg"
import TwTLogo from "../../images/social_twitter.svg"
import IGLogo from "../../images/social_instagram.svg"
import LinLogo from "../../images/social_linkedin.svg"



const Footer = () => {
    return (
        <div className="footerContainer"> 
            <div className="footerLayout">
                <img src={footerLogo} width="100vw" height="180vw" alt="" name="footerLogo" />
                <div className="footerLinksAndSocial">
                    <div className="footerLinks">
                        <div className="fLinksLeft">
                            <CustomLink name="Support" url1="support@rentrezi.com" phone="(844) 739 4049"></CustomLink>
                            <CustomLink name="Acquisition Team" url1="sales@rentrezi.com" phone="(929) 343 5710"></CustomLink>
                        </div>
                        <div className="fLinksRight">
                                <CustomLink name="Tenants" url1="/#!" urlName1="How it works?" url2="/#!/search" urlName2=""></CustomLink>
                                <CustomLink name="Landlords" url1="/#!/trinity" urlName1="Trinity" url2="/#!/landlord" urlName2="Upfront"></CustomLink>
                                <CustomLink name="Company" url1="/#!/about" urlName1="About Us" url2="/#!/careers" urlName2="Careers"></CustomLink>
                                <CustomLink name="Legal" url1="/#!/privacy"  urlName1="Privacy Policy" url2="/#!/terms" urlName2="Terms of Use"></CustomLink>
                        </div>
                            
                    </div>
                    <div className="footerSocial">
                        <a href="https:\\www.facebook.com"><div className="socialIcon"><img className="socialIconinside" src={FbLogo} alt=""/></div></a>
                        <a href="https:\\www.twitter.com"><div className="socialIcon"><img className="socialIconinside" src={TwTLogo} alt=""/></div></a>
                        <a href="https:\\www.linkedin.com"><div className="socialIcon"><img className="socialIconinside" src={LinLogo} alt=""/></div></a>
                        <a href="https:\\www.instagram.com"><div className="socialIcon"><img className="socialIconinside" src={IGLogo} alt=""/></div></a>
                        <span>&#xA9; REZI 2020</span>
                    </div>    
                </div> 
            </div>      
        </div>

    )


};

export default Footer;