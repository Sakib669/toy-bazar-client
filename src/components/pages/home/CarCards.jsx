/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaStar, } from "react-icons/fa";
import { Link } from "react-router-dom";

const CarCards = ({ toy }) => {
    console.log(toy);
    const { name, price, picture, rating, _id } = toy;
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="flex items-center">
                    <p>$:{price} </p>
                    <span className='ms-auto flex items-center'><FaStar className='text-yellow-400'/>{rating}</span>
                </div>
                
                <div className="card-actions justify-end">
                    <Link to={`/car-details/${_id}`}>
                        <button className="btn btn-info">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCards;