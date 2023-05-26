import { Helmet } from "react-helmet";


const Blogs = () => {
    return (
        <section className="p-10">
            <Helmet>
                <title>{'Toy Bazar | Blogs'}</title>
            </Helmet>
            <div className="my-10 p-5 border rounded-lg border-sky-200">
                <h3 className="text-xl text-sky-500 font-bold">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h3>
                <p>
                    <span className="underline font-bold mr-3">Ans</span>
                    Access tokens are used in token-based authentication to allow an application to access an API
                    <br />
                    Access tokens are valid for a short time so after the expiration of the tokens, the client application can use a refresh token to 'refresh' the access token
                    <br />
                    both of then can be stored in client-application's local storage or cookies.
                </p>
            </div>
            <div className="my-10 p-5 border rounded-lg border-sky-200">
                <h3 className="text-xl text-sky-500 font-bold">
                    Compare SQL and NoSQL databases?
                </h3>
                <p>
                    <span className="underline font-bold mr-3">Ans</span>
                    SQL Stands for Structured Query Language	andt it's a Relational database management system (RDBMS)
                    <br />
                    On the other hand,
                    <br />
                    NoSQL Stands for Not Only SQL,
                    it's a Non-relational database management system

                </p>
            </div>
            <div className="my-10 p-5 border rounded-lg border-sky-200">
                <h3 className="text-xl text-sky-500 font-bold">
                    What is express js? What is Nest JS ?
                </h3>
                <p>
                    <span className="underline font-bold mr-3">Ans</span>
                    Express is a  Node.js web application framework
                    <br />
                    Nest. js is a Node. js frameworks
                </p>
            </div>
            <div className="my-10 p-5 border rounded-lg border-sky-200">
                <h3 className="text-xl text-sky-500 font-bold">
                    What is MongoDB aggregate and how does it work ?
                </h3>
                <p>
                    <span className="underline font-bold mr-3">Ans</span>
                    MongoDB Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.
                    <br />

                </p>
            </div>
        </section>
    );
};

export default Blogs;