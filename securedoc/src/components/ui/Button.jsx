import React from 'react'

const Button = ( {onClick, disabled, text} ) => {

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mt-10 w-full sm:w-56 py-3 rounded-full text-sm font-medium transition-all duration-300
        ${
          !disabled
            ? "bg-amber-400 text-black hover:bg-amber-500 hover:scale-105"
            : "bg-gray-100 dark:bg-zinc-800 text-gray-400 cursor-not-allowed"
        }`}
    >
      {text}
    </button>
  )
}

export default Button