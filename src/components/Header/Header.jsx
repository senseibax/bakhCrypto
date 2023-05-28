import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    const isLoggedIn = false;

    return (
        <header>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Bakh<span className='yellow-span'>Crypto</span></Link></li>
                    <li><Link to="/nft">NFT</Link></li>
                    <li><Link to="/news">News</Link></li>
                    {isLoggedIn ? (
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    ) : (
                        <li><Link to="/login" className='login-link'>Войти</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header