import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => alert(err.message));
    }

    const navItems =
        <>
            <Link className="p-2  hover:bg-sky-400  active:text-white rounded-lg" to='/'>
                <li>Home</li>
            </Link>
            <Link to='/all-toys' className="p-2  hover:bg-sky-400  active:text-white rounded-lg"><li>All Toys</li></Link>
            <Link to='blogs' className="p-2  hover:bg-sky-400  active:text-white rounded-lg"><li>Blogs</li></Link>
            <Link className={`${user ? 'hidden' : 'block'} p-2 hover:bg-sky-400  active:text-white rounded-lg`} to='/login'><li>Login</li></Link>
            {
                user && 
                <Link to='/my-toys' className="p-2  hover:bg-sky-400  active:text-white rounded-lg"><li>My Toys</li></Link>
            }
            {
                user &&
                <Link to='/add-toy' className="p-2  hover:bg-sky-400  active:text-white rounded-lg"><li>Add A Toy</li></Link>
            }
            {
                user &&
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={user?.photoURL
                            ||
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU'} />
                    </div>
                </div>
            }
            {
                user &&
                <button onClick={handleLogout} className="hover:bg-rose-500 p-3 rounded-lg"> Log Out</button>
            }
        </>

    return (
        <div className="navbar bg-base-100 mb-10 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className="w-14 mr-1" src="https://i.ibb.co/3vyYj3k/logo1-1.png" alt="" />
                    Toy <span className="text-sky-500">Bazar</span></a>
            </div>
            <div className="navbar-center ms-auto hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;