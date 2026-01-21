import React from 'react'

const NavItem = ( {icon, label} ) => {

  return (
    <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:opacity-80 text-xs sm:text-sm">
      {icon}
      <span>{label}</span>
    </div>
  )
}

export default NavItem