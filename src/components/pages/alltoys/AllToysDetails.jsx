/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const AllToysDetails = ({toy}) => {
    const { name, price, quantity, _id, subCategory, sellerName} = toy;
    return (
        <tr>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{quantity}/pcs</td>
            <td>{subCategory}</td>
            <td>
                <Link to={`/all-toys/${_id}`}><button className="btn btn-xs btn-info">View Details</button></Link>
                </td>
        </tr>
    );
};

export default AllToysDetails;