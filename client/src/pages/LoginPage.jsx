import React from 'react';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-beige-100 to-white">
            <form className="bg-white p-10 rounded-2xl shadow-xl min-w-[340px] max-w-[90vw] flex flex-col gap-6">
                <div className="text-blue-900 font-bold text-2xl text-center mb-2 tracking-wide">
                    Login to Trip4You
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 rounded-lg border border-slate-300 text-blue-900 bg-beige-100 outline-none mb-2 focus:border-blue-400 transition"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="px-4 py-3 rounded-lg border border-slate-300 text-blue-900 bg-beige-100 outline-none mb-2 focus:border-blue-400 transition"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-900 text-white rounded-lg py-3 font-semibold text-base cursor-pointer hover:bg-blue-800 transition"
                >
                    Login
                </button>
                <div className="text-blue-900 underline text-sm text-center mt-2 cursor-pointer">
                    Forgot password?
                </div>
                <div className="text-blue-900 underline text-sm text-center mt-2 cursor-pointer">
                    Don't have an account? Sign up
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
