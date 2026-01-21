import React, { useState } from 'react'
import { FiUpload, FiFileText, FiBell, FiUser, FiMenu, FiX } from "react-icons/fi";
import securedocshield from "../../assets/securedocshield.png";
import NavItem from '../ui/NavItem';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#c18b3a] text-white px-4 sm:px-8 py-4 flex items-center justify-between flex-wrap">
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-3 font-semibold text-lg">
        <img
          src={securedocshield}
          alt="SecureDoc Logo"
          className="drop-shadow-2xl h-8"
        />
        <span>SecureDoc</span>
      </div>

      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center gap-6 text-sm">
        <NavItem icon={<FiUpload />} label="Upload" />
        <NavItem icon={<FiFileText />} label="Files" />
        <NavItem icon={<FiBell />} label="Notification" />
        <NavItem icon={<FiUser />} label="Profile" />
      </nav>

      {/* Mobile menu button */}
      <button
        className="sm:hidden text-xl cursor-pointer"
        onClick={toggleMenu}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="w-full sm:hidden mt-2 bg-[#c18b3a] rounded-lg shadow-md flex flex-col gap-2 py-2 px-4">
          <NavItem icon={<FiUpload />} label="Upload" />
          <NavItem icon={<FiFileText />} label="Files" />
          <NavItem icon={<FiBell />} label="Notification" />
          <NavItem icon={<FiUser />} label="Profile" />
        </div>
      )}
    </header>
  )
}

export default Header