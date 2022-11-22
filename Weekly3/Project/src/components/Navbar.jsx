import React from "react";
import logo from "../asset/beautyou-logo.png";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {

    const navigate = useNavigate ();
    const Home = () => {
        navigate(`/`);
    };
    const AboutUs = () => {
        navigate(`/About/Us`);
    };
    const Recommendation = () => {
        navigate(`/Recommendation/page`);
    };
    const ContactInfo = () => {
        navigate(`/Contact/Info`)
    };

    return (
        <>
            <nav className="recommendation-page fixed-top navbar-scroll">
                <img className= "logo" src={logo} alt=""/>
                    <div className="navigation">
                        <a href="" onClick={Home} >Home</a>
                        <a href="" onClick={AboutUs}>About</a>
                        <a href="" onClick={Recommendation}>Recommendation</a>
                        <a href="" onClick={ContactInfo} >Contact</a>
                    </div>
            </nav>
        </>
    );
};

export default Navbar;
