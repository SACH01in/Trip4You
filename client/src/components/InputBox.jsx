import React, { useState } from 'react'
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const InputBox = ({ name, label, type, placeholder, required = false, value, onChange }) => {
    const [isPassword, setIsPassword] = useState(true);
  return (
    <div className={`relative w-full h-13 rounded-lg border border-indigo-300 bg-white focus-within:border-blue-400 transition ovrerflow-hidden`}>
        <label htmlFor={label} className="px-2 absolute -top-2.5 left-3 bg-white text-sm text-indigo-600  block text-sm font-medium text-gray-700 z-20">
          {label}
        </label>
        {type === "password" ?
        <div className="relative w-full h-full">
            <input
                name={name}
                type={isPassword ? "password" : "text"}
                id={label}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className="block w-full h-full font-md border-none outline-none px-5 py-1 text-zinc-500 bg-white focus:border-blue-400 rounded-lg transition"
            />
            <span className="absolute right-3 top-1/2  transform -translate-y-1/2 cursor-pointer" onClick={() => setIsPassword(!isPassword)}>
                {isPassword ? <IoIosEye className='font-3xl'/> : <IoIosEyeOff className='font-3xl'/>}
            </span>
        </div>
         : 
         <input
          name={name}
          type={type}
          id={label}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className="block w-full h-full font-md border-none outline-none px-5 py-1 text-zinc-500 bg-white focus:border-blue-400 rounded-lg transition"
        /> }
    </div>
  )
}

export default InputBox