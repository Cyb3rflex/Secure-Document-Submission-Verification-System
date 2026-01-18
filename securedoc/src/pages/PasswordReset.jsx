import React from "react";
import securedocshield from "../assets/securedocshield.png";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen justify-center bg-[#E5E7EB] dark:bg-zinc-950">
      {/* RIGHT FORM */}
      <div
        className="w-full lg:w-1/2 bg-[#E5E7EB] flex items-center justify-center
                   lg:h-auto"
      >
        {" "}
        {/* h-screen only on small screens, desktop auto */}
        <div className="bg-white w-full max-w-md rounded-[2.5rem] p-8 md:p-12 shadow-xl flex flex-col items-center">
          <img
            src={securedocshield}
            alt="Logo"
            className="w-24 h-24 mb-4 md:w-28 md:h-28 md:mb-6"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 text-center leading-snug mb-6">
            Password <br /> Reset
          </h1>

          <form className="w-full space-y-4 md:space-y-5">
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-5 py-4 md:py-5 rounded-2xl border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-5 py-4 md:py-5 rounded-2xl border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />

            <button
              className="w-full py-4 md:py-5 bg-[#C08C4A] text-white font-semibold
          rounded-2xl hover:bg-[#a6783f] transition shadow-md mt-2"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
