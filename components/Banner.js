import React from 'react';

const Banner = ({ title, description }) => {
    return (
        <div className="bg-light text-dark py-5">
            <div className="container text-center">
                <h2 className=" fw-bold mb-3">{title}</h2>
                <span className="lead ">{description}</span>
            </div>
        </div>
    );
};

export default Banner;
