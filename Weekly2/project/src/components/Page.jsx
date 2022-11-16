import { React, useState} from "react";
import logo from "../asset/beautyou-logo.png";
import "../css/Page.css";
import { useNavigate } from "react-router-dom";

const Page = () => {

    const baseData = {
        firstName: "",
        lastName: "",
        email: "",
        text: "",
    };

    const [data, setData] = useState(baseData);

    const handleInput = e =>{
        const name = e.target.name;
        const value = e.target.value;

        setData({
            ...data,
            [name]:value
        });
    };

        const handleSubmit = () => {
                alert(`Pesan Anda Berhasil Dikirim!`)
        };

        const resetData = () => {
            setData(baseData);
        };

  const navigate= useNavigate();
    const AboutUs = () => {
        navigate(`/About/Us`);
    };

    return(
        <section>
            <header>
                <img className= "logo" src={logo} alt=""/>
                <div className="navigation">
                    <a href="#">Home</a>
                    <a href="#" onClick={AboutUs}>About</a>
                    <a href="#">Recommendation</a>
                    <a href="#">Contact</a>
                </div>
            </header>

        <div className="content">
            <div className="intro">
                <h2>Have Your Own Beauty <br/><span>In Here!</span></h2>
                <p>Find everything you want and need to know about beauty on BeautyOU Product Reviews and Consumer Opinions! 
                    We are here to be your friendly solution to all things beauty, inside and out! Are there beauty products 
                    that you love so much that you want to share your experience about? Or are you in dilemma on which beauty 
                    products to buy for a product? BeautyOU provides a specific review page for you to do exactly that – share 
                    your opinions and find beauty solutions for your problems, and make a better decision for yourself!</p>
                    <a href="#" className="intro-btn">More Info</a>   
            </div>
        </div>
        <div className="contact-us">
            <h3>Contact Us</h3>
            <p>Need to get in touch with us? either fill out the form with your inquiry or find the department email
                you'd like to contact below.
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='form-label d-flex flex-column justify-content-start'>
                        First Name
                        <br/>
                        <input 
                        type="text" 
                        name="firsName"
                        required 
                        onChange={handleInput}
                        style={{width: "100%", height: 30, borderRadius: 5, marginBottom: 10}}
                        />
                    </label>

                    <label className='form-label d-flex flex-column justify-content-start'>
                        Last Name
                        <br/>
                        <input 
                        type="text" 
                        name="lastName"
                        required 
                        onChange={handleInput}
                        style={{width: "100%", height: 30, borderRadius: 5, marginBottom: 10}}
                        />
                    </label>

                    <label className='form-label d-flex flex-column justify-content-start'>
                        Email
                        <br/>
                        <input 
                        type="email" 
                        name="email"
                        required 
                        onChange={handleInput}
                        style={{width: "100%", height: 30, borderRadius: 5, marginBottom: 10}}
                        />
                    </label>

                    <label className='form-label d-flex flex-column justify-content-start'>
                        What can we help you with?
                        <br/>
                        <input 
                        type="text" 
                        name="text"
                        required 
                        onChange={handleInput}
                        style={{width: "100%", height: 30, borderRadius: 5, marginBottom: 10}}
                        />
                    </label>
                  </div>
                    <div className="col-6">
                    <button onClick={resetData} type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </section>
    );
};

export default Page;