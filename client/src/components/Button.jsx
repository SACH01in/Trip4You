import React from 'react'

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="text-lg border border-indigo-600 font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded transition-colors duration-300">
      {label}
    </button>
  )
}

export default Button