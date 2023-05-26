/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ToyDetails = ({ toy, handleToyDelete, toys, setToys }) => {
    const { description, price, quantity, _id } = toy;




    return (
        <tr>
            <th>
                <button onClick={() => handleToyDelete(_id)} className="btn btn-circle btn-xs btn-outline btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>$: {price}</td>
            <td>{quantity}/pcs</td>
            <td>{description}</td>
            <td>
                <Link to={`/my-toys/${_id}`}><button className="btn btn-xs btn-info">Update</button></Link>
                </td>
        </tr>
    );
};

export default ToyDetails;