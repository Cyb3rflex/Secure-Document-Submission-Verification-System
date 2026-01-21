import React from 'react'

const Footer = () => {

  return (
    <footer className="bg-white text-gray-600 text-sm px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      {/* Left: copyright */}
      <span className="text-center sm:text-left">© SecureDoc 2026</span>

      {/* Right: links */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-right">
        <span className="cursor-pointer hover:underline">Support</span>
        <span className="cursor-pointer hover:underline">About Us</span>
        <span className="cursor-pointer hover:underline">Contact Us</span>
      </div>
    </footer>
  )
}

export default Footer