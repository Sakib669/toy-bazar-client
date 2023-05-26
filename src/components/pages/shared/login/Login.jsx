
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Helmet } from 'react-helmet';

const Login = () => {

    const {logIn, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        logIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace: true})
        })
        .catch(err => alert(err.message));
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace: true})
        })
        .catch(err => alert(err.message));
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Helmet>
                <title>{'Toy Bazar | Login'}</title>
            </Helmet>
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center">Login</h2>
                <form onSubmit={handleLogin} className="mt-6">
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input required type="email" id="email"
                        name='email' className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-sky-300" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input required type="password" 
                        name='password'
                        id="password" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-sky-300" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 text-lg font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700">
                        Sign In
                    </button>
                </form>
                <button onClick={handleGoogleLogin} type="submit" className="w-full my-5 px-4 py-2 text-lg font-medium text-white bg-rose-600 rounded-lg hover:bg-rose-700">
                    Sign In With Google
                </button>
                <p><small>New Here? <Link className='text-sky-600 underline' to='/register'>Register</Link></small></p>
            </div>
        </div>
    );
};

export default Login;