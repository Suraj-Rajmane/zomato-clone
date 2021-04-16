import React from 'react';
import Mobile from '../../images/mobileImage.webp';
import AppStore from "../../images/AppStoreImage.webp";
import GooglePlay from "../../images/GooglePlayImage.webp";
import "./GetZomatoApp.css";

const GetZomatoApp = () => {
    return (
        <section id="get-zomato-app">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-none d-md-flex">
                        <img src={Mobile} className="ml-auto" width="300px" height="500px" />
                    </div>
                    <div className="col-md-6">
                        <p className="display-4 font-weigth-bold mt-4">Get the Zomato App</p>
                        <p className="message">We will send you a link, open it on your phone to download the app</p>
                        
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input"/>
                                <label className="form-check-label ml-2 radio">Email</label>
                            </div>

                            <div className="form-check form-check-inline ml-5">
                                <input type="radio" className="form-check-input"/>
                                <label className="form-check-label ml-2 radio">Phone</label>
                            </div>

                            <div className="d-flex mt-4">
                                <input type="text" placeholder="Email" className="email-input"/>
                                <button className="btn btn-danger btn-lg ml-2">Share App Link</button>
                            </div>

                            <p className="mt-3 muted-text">Download app from</p>

                            <div className="d-flex">
                                <img alt="AppStoreImg" src={AppStore} width="200px" height="60px" className="mr-4"/>
                                <img alt ="GooglePlayImg" src={GooglePlay} width="200px" height="60px"/>
                            </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default GetZomatoApp;