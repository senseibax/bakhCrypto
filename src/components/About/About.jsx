import React from 'react';
import "./about.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <div className="about-container">
            <Header />
            <div className="about-content">
                <h1>About BakhCrypto</h1>
                <p>
                    BakhCrypto is a leading cryptocurrency exchange platform that provides users with a secure and efficient way to trade various cryptocurrencies. Our mission is to make cryptocurrency trading accessible and user-friendly for both beginners and experienced traders.
                </p>
                <p>
                    At BakhCrypto, we offer a wide range of cryptocurrencies to trade, including Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and many more. Our platform provides real-time market data, advanced trading tools, and a seamless user experience.
                </p>
                <p>
                    We prioritize the security of our users' funds and personal information. Our platform employs robust security measures, including two-factor authentication and cold storage for storing cryptocurrencies.
                </p>
                <p>
                    Whether you're new to cryptocurrency trading or a seasoned trader, BakhCrypto provides the tools and support you need to navigate the exciting world of digital assets. Join BakhCrypto today and start trading with confidence!
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default About;
