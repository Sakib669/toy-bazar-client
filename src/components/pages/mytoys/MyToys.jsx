import { useLoaderData } from "react-router-dom";
import ToyDetails from "./ToyDetails";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const myToys = useLoaderData();
    const [toys, setToys] = useState([]);
    const [sortingOrder, setSortingOrder] = useState(1);

    const handleSortingChange = (e) => {
        setSortingOrder(e.target.value);
        console.log(e.target.value);
    };

    useEffect(() => {
        const fetchToys = async () => {
            try {
                const response = await fetch(`https://toy-bazar-server-red.vercel.app/add/sort/${sortingOrder}`);
                const data = await response.json();
                setToys(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchToys();
    }, [sortingOrder]);

    const handleToyDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-bazar-server-red.vercel.app/add/${id}`, {
                    method: 'DELETE',
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        const remaining = toys?.filter(t => t._id !== id);
                        console.log(remaining);
                        setToys(remaining);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: err.message
                        })
                    })
            }
        })


    }




    return (
        <div className="px-20 min-h-screen">
            <Helmet>
                <title>{'Toy Bazar | My Toys'}</title>
            </Helmet>
            <select className="select select-bordered w-full max-w-xs my-5" value={sortingOrder} onChange={handleSortingChange}>
                <option value={1}>Ascending</option>
                <option value={-1}>Descending</option>
            </select>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Detail Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys?.map(t => (
                            <ToyDetails
                                key={t._id}
                                toy={t}
                                handleToyDelete={handleToyDelete}
                                toys={toys}
                                setToys={setToys}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;