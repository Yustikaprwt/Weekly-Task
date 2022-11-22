import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "../css/AboutUs.css";
import Footer from "../components/Footer.jsx";
import Loading from "../components/Loading";

const AboutUs = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getPeople = async () => {
            setLoading(true);
            const response = await fetch(
                "https://637510a908104a9c5f9156d0.mockapi.io/aboutus/aboutus"
            );

            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return() => {
                componentMounted = false;
            };
        };
        getPeople();
    }, []);

    return (
        <section className="recommendation-section">
            <Navbar/>
            <h3 className="recommendation-title">
                    <strong>About Us</strong>
            </h3>
                <hr/>
                    <div className="row" style={{display: "flex", flexDirection: "row"}}>
                        {filter.map((aboutUs) => (
                            <div className="col d-flex flex-row-wrap justify-content-center" >
                                <div className="frame text-center" key={aboutUs.id}>
                                    <img src={aboutUs.avatar} className="frame-img-top" alt={aboutUs.createdAt}/>
                                    <p  className="about-us-ppl" style={{color: "black"}}>{aboutUs.id}: {aboutUs.name}</p>
                                 </div>
                            </div>
                        ))};
                    </div>
                        <div className="loading">
                            {loading ? <Loading/> : <getPeople/>}
                        </div>
                    <Footer />
            </section>
        );
    };

export default AboutUs;