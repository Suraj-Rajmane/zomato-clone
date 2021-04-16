import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div id="header-img">
            <header>
                <div className="d-flex justify-content-center">
                    <div className="nav-menu">
                        <p className="float-left text-white m-0 mt-4 h5">Get the App</p>
                        <p className="float-right text-white m-0 mt-3 h4 nav-link">Sign up</p>
                        <p className="float-right text-white m-0 mt-3 h4 nav-link">Log in</p>
                    </div>
                </div>
            </header>
            
            <div className="container">
                <div className="d-flex justify-content-center header-flex">
                    <p className="zomato">zomato</p>
                </div>
                <p className="text-white text-center greeting">Discover the best food & drinks in Pune</p>
                <div className="d-flex justify-content-center mt-5">
                    <input type="text" placeholder="Search for restaurrant, cuisine or a dish" className="search-box"/>
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;