import React from 'react';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-300 font-sans">
            <h1 className="text-8xl font-extrabold text-indigo-500 tracking-wider m-0">
                404
            </h1>
            <h2 className="text-2xl text-slate-800 mb-4">
                Page Not Found
            </h2>
            <p className="text-slate-500 text-lg mb-8 text-center max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link
                to="/"
                className="px-5 py-2 m-3 flex items-center justify-center bg-indigo-500 text-white rounded-full font-semibold shadow-md hover:bg-indigo-700 transition"
            >
                Go To Home
                <MdHome className="text-xl ml-2" />
            </Link>
        </div>
    );
};

export default NotFoundPage;
