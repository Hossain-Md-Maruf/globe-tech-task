import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           
            <nav className="nav">
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/login">Login</a>
            </nav>
            
            <div>
            <h2 className="body">SERVICES</h2>
            <h2 className="body">We provides services to our clients</h2>
            </div>
           
            
           
        </div>
    );
};

export default Header;