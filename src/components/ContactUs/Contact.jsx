import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './contact.css'

function Contact() {
    return(
        <div className="contact-container">
            <Header />
            <div className="contact-content">
                <h1>Contact</h1>
                <p>
                    We value your feedback and are here to assist you. If you have any questions, suggestions, or need support regarding our platform or services, please don't hesitate to get in touch with us.
                </p>
                <p>
                    You can reach out to our support team via email, phone, or through our online contact form. We strive to provide timely and helpful responses to ensure a smooth and enjoyable experience on BakhCrypto.
                </p>
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Email: info@bakhcrypto.com</p>
                    <p>Phone: +7 707-575-50-06</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact