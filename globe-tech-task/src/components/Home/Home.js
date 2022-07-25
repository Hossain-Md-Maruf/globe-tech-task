import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1 className=" ">Welcome to <br /><span className="">Globetech</span></h1>
            <br />
            <p className="para">
                We committed to deliver <span>best IT services</span>. Our conssultants have experience in working with clients. We have extensive experience in  the software application space and also offer a broad range and depth of technology.
            </p>
            <br />
            
            <button type="button" class="btn btn-warning ">Support us</button>
            <button type="button" class="btn btn-info ">Our Mission</button>
            
            <div className="navigation">
            <nav className="nav">
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/login">Login</a>
            </nav>
            </div>
        </div>
    );
};

export default Home;