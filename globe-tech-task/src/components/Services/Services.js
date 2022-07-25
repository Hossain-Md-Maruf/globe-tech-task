import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [informations, setInformations] = useState([]);
    useEffect(()=>
    {
        fetch('./cardData.json')
        .then(res=> res.json())
        .then(data=> setInformations(data))
    },[])
    return (
        
        <div >
          <div>
          <nav className="naviga">
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/login">Login</a>
            </nav>
          </div>
          
           
            <div className="card services w-100">
            {
                informations.map(information=> <Service key={information.id} information={information}></Service>)
            }
            </div>
    
      
        </div>
    );
};

export default Services;