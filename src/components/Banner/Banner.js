import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-neutral container mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img className="md:max-w-2xl sm:max-w-xs rounded-lg shadow-2xl" src="https://i.ibb.co/x5PNr62/drillling.jpg" />
                <div>
                    <h1 className="text-8xl font-bold text-white">FIX <span className='text-warning'>IT!</span> </h1>
                    <p className="py-6 text-accent">We are world renowned drill machine manufacturer. Serving more than 50 companies wordwide with our best quality product</p>
                    <Link className='btn btn-warning' to='/products'>OUR PRODUCTS</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;