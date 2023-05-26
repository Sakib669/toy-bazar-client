import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet';

function AddToyPage() {
  const {user} = useContext(AuthContext)
  const userEmail = user.email;
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState(user.displayName);
  const [sellerEmail, setSellerEmail] = useState(user.email);
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const toyInfo ={
        picture,
        name,
        sellerEmail,
        sellerName,
        subCategory,
        price,
        rating,
        quantity,
        description,
        userEmail
    };
    console.log(toyInfo);

    // TODO: Handle form submission logic

    fetch('https://toy-bazar-server-red.vercel.app/add-car',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(toyInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged){
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        e.target.reset();
      }
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: err.message
      })
    })
  };

  return (
    <div className="px-20 min-h-screen">
      <Helmet>
        <title>{'Toy Bazar | Add Toy'}</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Add A Toy</h1>
      <form onSubmit={handleSubmit}>
        <section className='grid gap-10 md:grid-cols-2'>
        <div className="mb-4">
          <label htmlFor="picture" className="block font-bold mb-2">
            Picture URL of the toy:
          </label>
          <input required
            type="text"
            id="picture"
            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Product Name:
          </label>
          <input required
            type="text"
            id="name"
            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerName" className="block font-bold mb-2">
            Seller Name:
          </label>
          <input required
            value={sellerName}
            type="text"
            id="sellerName"
            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
            onChange={(e) => setSellerName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block font-bold mb-2">
            Seller Email:
          </label>
          <input required
            value={sellerEmail}
            type="email"
            id="sellerEmail"
            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
            onChange={(e) => setSellerEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="block font-bold mb-2">
            Sub-category:
          </label>
          <input required
            type="text"
            id="subCategory"
            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-bold mb-2">
            Price:
          </label>
          <input required
            min={0}
            type="number"
            id="price"
            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block font-bold mb-2">
            Rating:
          </label>
          <input required
            min={0}
            max={5}
            type="number"
            id="rating"
            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block font-bold mb-2">
            Available Quantity:
          </label>
          <input required
            min={0}
            type="number"
            id="quantity"
            className="w-full border-2 border-gray-200 rounded py-2 px-4 focus:outline-none focus:border-sky-500"
            value={quantity}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        </section>
        <button
          type="submit"
          className="bg-sky-500 w-full hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
}

export default AddToyPage;
