import { useLoaderData } from 'react-router-dom';
import AllToysDetails from './AllToysDetails';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const AllToys = () => {
    const allToys = useLoaderData();
    const [toysArr, setToysArr] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const filteredToys = allToys?.filter(toy =>
            toy.name.toLowerCase()?.includes(searchQuery.toLowerCase())
        );
        setToysArr(filteredToys.slice(0, 20));
    }, [allToys, searchQuery]);

    console.log(allToys);

    const handleSearch = e => {
        setSearchQuery(e.target.value);
    };



    return (
        <div className="px-20 min-h-screen">
            <Helmet>
                <title>{'Toy Bazar | All Toys'}</title>
            </Helmet>
            <div className='flex my-5'>
                <input required
                    type="text"
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="px-4 py-2 rounded-lg border-gray-300 focus:ring focus:outline-none"
                />
                <button onClick={() => setToysArr(allToys)} className="btn ms-auto btn-info">
                    Show All
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Sub-Category</th>
                            <th>Detail Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toysArr?.map(t => (
                            <AllToysDetails key={t._id} toy={t} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;