import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="relative">
            <button onClick={() => navigate('/')}  className=" btn btn-round btn-lg bg-sky-300 outline-none border-none left-40 absolute">❮ Back Home</button> 
            <img className='w-3/4 mx-auto' src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?w=2000" alt="" />
        </div>
    );
};

export default ErrorPage;