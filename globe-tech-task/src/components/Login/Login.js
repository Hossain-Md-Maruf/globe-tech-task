import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            
            <div className="oneFraction">
            <h2>GLOBETECH <br />COMPANY LIMITED</h2>
            <p className="make"><small>Make yourself digitalized & more efficient</small></p>
            </div>
            
            <div className="form">
            
            <div className="reg">
            <h2 className="welcome">Welcome</h2>
             <p className="paragraph">Sign in to your account</p>
            </div>
            <div>
                <input className="email" type="email" placeholder="Email"></input>
                <br />
                <br />
                <input className="password" type="password" placeholder='Password' />
                <br />
                <br />
                <button className="button">Login</button>
            </div>
            
            </div>
            
            
           

        </div>
    );
};

export default Login;