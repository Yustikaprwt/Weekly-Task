import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "react-bootstrap";
import aboutus1 from "../asset/about-us-1.jpg";
import aboutus2 from "../asset/about-us-2.jpg";
import aboutus3 from "../asset/about-us-3.jpg";
import "../css/MoreInfo.css";

const MoreInfo = () => {

    return(
        <section className="about-us-section">
        <Navbar/>
            <Carousel>
                <Carousel.Item interval={500}>
                    <img 
                        className="d-block w-100 d-flex justify-content-center" 
                        style={{height: "450px", marginTop: "88px"}} 
                        src={aboutus1} 
                        alt="carousel-image"/>
                </Carousel.Item>
                    
                <Carousel.Item interval={500}>
                    <img 
                        className="d-block w-100 d-flex justify-content-center" 
                        style={{height: "450px", marginTop: "88px"}} 
                        src={aboutus2} 
                        alt="carousel-image"/>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img 
                        className="d-block w-100 d-flex justify-content-center" 
                        style={{height: "450px", marginTop: "88px"}} 
                        src={aboutus3} 
                        alt="carousel-image"/>
                </Carousel.Item>
            </Carousel>
            <div className="description-about-us">
                <p>
                    Find everything you want and need to know about beauty on BeautyOU Product Reviews and Consumer Opinions! 
                    We are here to be your friendly solution to all things beauty, inside and out! Are there beauty products 
                    that you love so much that you want to share your experience about? Or are you in dilemma on which beauty 
                    products to buy for a product? BeautyOU provides a specific review page for you to do exactly that – share 
                    your opinions and find beauty solutions for your problems, and make a better decision for yourself!
                </p>
            </div>
            <Footer/>
        </section>
    );
};

export default MoreInfo;