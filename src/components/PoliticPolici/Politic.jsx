import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './politic.css'

function Politic() {
    return(
        <div className="politic-container">
            <Header />
            <div className="politic-content">
                <h1>Politic</h1>
                <p>
                    At BakhCrypto, we prioritize the privacy and security of our users. We are committed to protecting your personal information and ensuring a transparent and trustworthy platform.
                </p>
                <p>
                    We adhere to strict data protection policies and comply with relevant privacy regulations. Our privacy policy outlines how we collect, store, and use your information. We do not share your data with third parties without your consent unless required by law.
                </p>
                <p>
                    We implement advanced security measures to safeguard your funds and prevent unauthorized access. This includes using secure encryption protocols, multi-factor authentication, and regular security audits.
                </p>
                <p>
                    BakhCrypto is dedicated to maintaining a fair and ethical trading environment. We do not engage in market manipulation or insider trading. Our platform operates on transparent and reliable market data.
                </p>
                <p>
                    If you have any concerns or questions regarding our privacy policy or trading practices, please contact our support team. We are here to assist you and ensure a positive trading experience.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Politic