import React from "react";
import Navbar from "../components/Navbar";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineLocationCity } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";
import "../css/Contact.css";

const Contact = () => {
    return (
        <section className="contact-page">
            <Navbar />
            <div className="information">
                <a href="https://www.bing.com/ck/a?!&&p=1fa6e963054f5ecbJmltdHM9MTY2ODU1NjgwMCZpZ3VpZD0zOWI3NjRjOC1kNDk0LTZiOGUtMTAwMS03NmUzZDVjMjZhN2YmaW5zaWQ9NTE3OQ&ptn=3&hsh=3&fclid=39b764c8-d494-6b8e-1001-76e3d5c26a7f&psq=whatsapp&u=a1aHR0cHM6Ly93d3cud2hhdHNhcHAuY29tLw&ntb=1" ><TbPhoneCall/><span>0812-3456-7890</span></a>
                <a href="https://www.bing.com/ck/a?!&&p=883f4bf8d9543b34JmltdHM9MTY2ODU1NjgwMCZpZ3VpZD0zOWI3NjRjOC1kNDk0LTZiOGUtMTAwMS03NmUzZDVjMjZhN2YmaW5zaWQ9NTE2OA&ptn=3&hsh=3&fclid=39b764c8-d494-6b8e-1001-76e3d5c26a7f&psq=google+maps+2022&u=a1aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL0A0Ni4yMDIyLDYuMTM5NjIsMTh6&ntb=1"><MdOutlineLocationCity /> <span>Jawa Timur, Malang</span></a>
                <a href="https://www.bing.com/ck/a?!&&p=65c45fa5830fae44JmltdHM9MTY2ODU1NjgwMCZpZ3VpZD0zOWI3NjRjOC1kNDk0LTZiOGUtMTAwMS03NmUzZDVjMjZhN2YmaW5zaWQ9NTE3Ng&ptn=3&hsh=3&fclid=39b764c8-d494-6b8e-1001-76e3d5c26a7f&psq=instagram&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8&ntb=1"><TiSocialInstagram /> <span>@Beautyou</span></a>
            </div>
        </section>
    );
};

export default Contact;