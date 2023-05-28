import React from 'react'
import './footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <ul className="footer-links">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/politic">Privacy Policy</Link></li>
                </ul>
                <p>&copy; {new Date().getFullYear()} BakhCrypto.</p>
            </div>
        </footer>
    )
}

export default Footer