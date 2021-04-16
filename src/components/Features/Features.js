import React from 'react';
import "./Features.css";

const Features = () => {
    return (
        <section id="second-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*" height="80%" width="100%" />
                            <div className="card-bottom">
                                <p className="h4 m-0 mt-2 mb-3 text-center">Order Food Online</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*" height="80%" width="100%" />
                            <div className="card-bottom">
                                <p className="h4 m-0 mt-2 mb-3 text-center">Go out for a meal</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*" height="80%" width="100%" />
                            <div className="card-bottom">
                                <p className="h4 m-0 mt-2 mb-3 text-center">Nightlife & Clubs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*" height="80%" width="100%" />
                            <div className="card-bottom">
                                <p className="h4 m-0 mt-2 mb-3 text-center">Zomato Pro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;