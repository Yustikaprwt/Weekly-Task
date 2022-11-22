import React from "react";
import "../css/Footer.css";
import logo from "../asset/beautyou-logo.png";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai"
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer fixed">
        <div className="footer-left">
            <div className="logo">
                <img src={logo} alt="logo"/>
                </div>
            </div>
        
        <div className="footer-center">
            <div>
                <MdLocationOn className="icon" 
                                style={{
                                color: "#FFFF"}}/>
                <p>
                    <span>Indonesia</span>
                     Jawa Timur, Malang
                </p>
            </div> 

            <div>
                <BsTelephoneFill className="icon" 
                                style={{
                                color: "#FFFF"}}/>
                <p>0812-3456-7891</p>
            </div>

            <div>
                <MdEmail className="icon" 
                        style={{
                        color: "#FFFF"}}/>
                <p>
                    <a href="#">perwitayustika@yahoo.com</a>
                </p>
            </div>
        </div>

        <div className="footer-right">
            <p className="footer-about">
                <span>About Us</span>
                BEAUTYOU is a digital catalog to guide and help you for everything you need and details about makeup product. 
                Sometimes, the girls don't know about the makeup product their worth to buy. BEAUTYOU is a inspiring for your beauty. 
            </p>
            <div className="footer-media">
                <a href="https://www.linkedin.com/in/yustika-perwita-sari-301747256/"><AiFillLinkedin /></a>
                <a href="https://www.instagram.com/yustikaprwt/"><AiFillInstagram /></a>
                <a href="https://github.com/Yustikaprwt"><AiFillGithub /></a>
            </div>
        </div>
    </footer>
    );
};

export default Footer;