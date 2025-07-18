import React, { useContext, useState } from 'react';
import InputBox from '../components/InputBox';
import UserContext from '../Context/userContext';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { handleLogin, handleRegister} = useContext(UserContext)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleFormsubmit = (e) => {
        e.preventDefault();

        if(isLogin){
            handleLogin(formData.username,formData.password)
        } else {
            handleRegister(formData.name, formData.username, formData.password)
        }

        setFormData({
            username: '',
            password: '',
            name: '',
        })
    
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-beige-100 to-white">
            <form onSubmit={handleFormsubmit} className="bg-white p-10 rounded-2xl shadow-xl min-w-[340px] max-w-[90vw] flex flex-col gap-6">
                <div className="text-blue-900 font-bold text-2xl text-center mb-2 tracking-wide">
                    {isLogin ? "Sign In" : "Sign Up"}
                </div>
                {
                    !isLogin && <InputBox name={'name'} value={formData.name} onChange={handleInputChange} label={'name'} type={'text'} placeholder={'name'} required />
                }
                <InputBox name={'username'} value={formData.username} onChange={handleInputChange} type={'text'} placeholder={'Username'} label={'username'} required />
                <InputBox name={'password'} value={formData.password} onChange={handleInputChange} type={'password'} placeholder={'password'} label={'password'} required />
                <button
                    type="submit"
                    className="bg-blue-900 text-white rounded-lg py-3 font-semibold text-base cursor-pointer hover:bg-blue-800 transition"
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
                {isLogin && (<><div className="text-blue-900 underline text-sm text-center mt-2 cursor-pointer">
                    Forgot password?
                </div>
                <p className='w-full text-center'>or</p></>)}
                <div className="text-blue-900 underline text-sm text-center mt-2 cursor-pointer" onClick={() => setIsLogin((prev) => !prev) }>
                    {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Sign in'}
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
