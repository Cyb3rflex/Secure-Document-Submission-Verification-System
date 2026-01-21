import React from 'react'

const ActionBtn = ( {icon, label} ) => {

  return (
    <button className="flex flex-col items-center text-[9px] sm:text-xs text-gray-600 cursor-pointer hover:opacity-80">
      <div className="text-lg mb-1">{icon}</div>
      {label}
    </button>
  )
}

export default ActionBtn