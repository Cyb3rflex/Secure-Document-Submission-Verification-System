import { useState } from "react";
import { FiUpload, FiFileText, FiBell, FiUser, FiMenu, FiX } from "react-icons/fi";
import securedocshield from "../../assets/securedocshield.png";
import UploadActions from "./UploadActions";
import UploadTable from "./UploadTable";
import useRole from "../../hooks/useRole";
import { ROLE_LABELS } from "./upload.constants";

export default function UploadPage({ user }) {
  const role = useRole(user);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
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

      {/* MAIN */}
      <main className="flex-1 px-4 sm:px-10 py-6 sm:py-8">
        <h2 className="text-lg font-medium mb-4">
          Welcome Back <span className="font-semibold">{user.name}</span>
        </h2>

        {/* UPLOAD CARD */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-8">
          <h3 className="text-center font-medium mb-4 sm:mb-6 text-sm sm:text-base">
            {ROLE_LABELS[user.role].title}
          </h3>

          {/* Upload actions */}
          {role.canUpload && <UploadActions />}

          {/* Table */}
          <UploadTable role={role} />
        </div>
      </main>

      {/* FOOTER */}
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
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:opacity-80 text-xs sm:text-sm">
      {icon}
      <span>{label}</span>
    </div>
  );
}
