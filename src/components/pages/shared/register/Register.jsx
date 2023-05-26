import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet";


const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            loggedUser.displayName = name;
            loggedUser.photoURL= photoURL;
            console.log(loggedUser);
        })
        .catch(err => alert(err.message));
    };
    return (
        <div className="flex items-center justify-center min-h-screen  bg-gray-100">
            <Helmet>
                <title>{'Toy Bazar | Register'}</title>
            </Helmet>
            <div className="w-1/2  p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center">Registration</h2>
                <form onSubmit={handleRegister} className="mt-6 ">
                    <div className="grid md:grid-cols-2">
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                            <input required type="text" 
                            name="name"
                            id="name" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-sky-300" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                            <input required type="email" id="email" 
                            name="email"
                            className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-sky-300" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                            <input required type="password" 
                            name="password"
                            className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-sky-300" placeholder="Enter your password" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-600">Photo URL</label>
                            <input required type="text" 
                            name="photoURL"
                            id="photoURL" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-sky-300" placeholder="Enter your photo URL" />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-4 py-2 text-lg font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700">
                        Register
                    </button>
                </form>
                <p><small>Already User? <Link className='text-sky-600 underline' to='/login'>Login</Link></small></p>
            </div>
        </div>
    );
};

export default Register;