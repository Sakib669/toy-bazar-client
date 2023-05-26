import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const [toyInfo, setToyInfo] = useState([]);
    const currentRoute = useParams();
    useEffect(() => {
        fetch(`https://toy-bazar-server-red.vercel.app/add/${currentRoute.id}`)
            .then(response => response.json())
            .then(data => setToyInfo(data))
    }, [])

    // const { price, quantity, description } = toyInfo;

    const [updatedPrice, setPrice] = useState('');
    const [updatedQuantity, setQuantity] = useState('');
    const [updatedDescription, setDescription] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedToyInfo = {
            price: updatedPrice,
            quantity: updatedQuantity,
            description: updatedDescription
        };
        console.log(updatedToyInfo);

        // TODO: Handle form submission logic

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://toy-bazar-server-red.vercel.app/add/${currentRoute.id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedToyInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire('Saved!', '', 'success')
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: err.message
                          })
                    })
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })


    };

    return (
        <div>
            <Helmet>
                <title>{'Toy Bazar | Update'}</title>
            </Helmet>
            <form onSubmit={handleUpdate}>
                <section className='grid gap-10 md:grid-cols-2'>
                    <div className="mb-4">
                        <label htmlFor="price" className="block font-bold mb-2">
                            Price:
                        </label>
                        <input required
                            type="number"
                            id="price"
                            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block font-bold mb-2">
                            Available Quantity:
                        </label>
                        <input required
                            type="number"
                            id="quantity"
                            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block font-bold mb-2">
                            Detail Description:
                        </label>
                        <textarea
                            id="description"
                            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </section>
                <button
                    type="submit"
                    className="bg-sky-500 w-full hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateToy;