import React from 'react';

const Banner = ({ title, description }) => {
    return (
        <div className="bg-f7f7f7 text-dark py-5">
            <div className="container text-center">
                <h1 className=" fw-bold mb-3 text-center">{title}</h1>
                <span className="fw-normal text-xl ">{description}</span>
            </div>
        </div>
    );
};

export default Banner;
