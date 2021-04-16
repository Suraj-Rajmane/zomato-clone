import React from 'react';
import "./Localities.css";

const Localities = ({locations}) => {
    return (
        <section id="popular-locations">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <p className="localities-heading">Popular localities in and around 
                        <span className="font-weight-bold"> Pune</span> 
                    </p>
                </div>
                <div className="grid-container">
                    {locations.map((location) => 
                    <div className="d-flex align-items-center location-div" key={location}>
                        
                        <p className="m-0 ml-3 h4">{location}</p>
                        <i className="fa fa-arrow-right ml-auto mr-4"></i>
                        
                        
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Localities;