/* eslint-disable no-unused-vars */

import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useLocation } from 'react-router-dom';

const CarDetails = () => {
    const car = useLoaderData();
    const {picture, name, description, sellerName, sellerEmail, quantity, price, rating} = car;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10 items-center">
                <img src={car?.picture} className=" rounded-lg shadow-2xl max-w-sm" />
                <div className='space-y-2' >
                    <h1 className="text-5xl text-sky-500 font-bold">{car?.name}</h1>
                    <div className='flex items-center'>
                        <p>$:{car?.price}</p>
                        <p className='flex ms-auto items-center '><FaStar className='text-yellow-400' />{car?.rating}</p>
                    </div>
                    <p>Seller: {car?.sellerName}</p>
                    <p>Seller Email: {car?.sellerEmail}</p>
                    <p>Available Quantity: {car?.quantity}</p>
                    <p>{car?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;