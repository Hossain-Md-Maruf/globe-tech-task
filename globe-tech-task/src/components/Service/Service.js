import React from 'react';
import './Service.css';

const Service = (props) => {
    // console.log(props.information);
    const {img,title,info} = props.information;
    return (
        
        <div className="service ">
            
            <div >
        <img className="img center" src={img} alt="" />
        <h1 className="title">{title}</h1>
        <p className="text">{info}</p>
        <button className="btn-regular">More</button>
        </div>
        </div>
    );
};

export default Service;