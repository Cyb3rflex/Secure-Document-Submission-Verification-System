import React from "react";
import securedocshield from "../assets/securedocshield.png";
import secureDoc4 from "../assets/securedoc4.png"
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#E5E7EB]">
      {/* LEFT ILLUSTRATION */}
      <div className="w-full lg:w-1/2 relative min-h-60 sm:min-h-70 lg:min-h-screen overflow-hidden order-2 lg:order-1">
        <div
          className="w-fit h-screen"
        >
          <img
            src={secureDoc4}
            alt="SecureDoc Illustration"
            className="drop-shadow-2xl h-screen"
          />
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full bg-[#E5E7EB] lg:w-1/2 flex items-center justify-center p-5 md:p-8 order-1 lg:order-2 h-screen overflow-hidden">
        <div className="bg-white w-full max-w-md rounded-[2.25rem] p-6 md:p-8 shadow-xl flex flex-col items-center">
          <img src={securedocshield} alt="Logo" className="w-20 h-20 mb-3" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center leading-snug">
            Create <br /> Account
          </h1>

          <form className="w-full space-y-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-xl border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-xl border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />

            <button
              className="w-full py-3 bg-[#C08C4A] text-white font-semibold
              rounded-xl hover:bg-[#a6783f] transition shadow-md mt-1"
            >
              Create account
            </button>
          </form>

          {/* SOCIAL LOGIN */}
          <div className="mt-4 flex flex-col items-center">
            <p className="text-gray-400 text-[11px] mb-2">Or sign up with</p>
            <div className="flex gap-2.5">
              <button className="p-2 border rounded-lg hover:bg-gray-50 transition">
                <img
                  src="/google-icon.png"
                  alt="Google"
                  className="w-4.5 h-4.5"
                />
              </button>
              <button className="p-2 border rounded-lg hover:bg-gray-50 transition">
                <img
                  src="/fb-icon.png"
                  alt="Facebook"
                  className="w-4.5 h-4.5"
                />
              </button>
            </div>
          </div>

          {/* TERMS */}
          <p className="mt-4 text-[10px] text-gray-400 text-center px-2 leading-relaxed">
            By creating an account you agree to SecureDoc's
            <span className="text-[#C08C4A] underline cursor-pointer">
              {" "}
              Terms
            </span>{" "}
            &
            <span className="text-[#C08C4A] underline cursor-pointer">
              {" "}
              Privacy Policy
            </span>
            .
          </p>

          <p className="mt-3 text-xs text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#C08C4A] font-semibold cursor-pointer underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
