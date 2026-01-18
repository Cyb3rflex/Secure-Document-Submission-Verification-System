import securedocshield from "../assets/securedocshield.png";
import secureDoc4 from "../assets/securedoc4.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen justify-center bg-[#E5E7EB] dark:bg-zinc-950">
      {/* LEFT ILLUSTRATION - hidden on small screens */}
      <div className="hidden lg:block w-1/2 relative min-h-screen overflow-hidden">
        <div className="w-2xl h-screen">
          <img
            src={secureDoc4}
            alt="SecureDoc Illustration"
            className="drop-shadow-2xl h-screen "
          />
        </div>
      </div>

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
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center leading-snug">
            Login
          </h1>

          <form className="w-full space-y-4 md:space-y-5">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-5 py-4 md:py-5 rounded-2xl border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-4 md:py-5 rounded-2xl border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-300"
                />
                <label className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <div>
                <Link to="/reset-password" className="text-[#C08C4A] font-semibold cursor-pointer hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              className="w-full py-4 md:py-5 bg-[#C08C4A] text-white font-semibold
          rounded-2xl hover:bg-[#a6783f] transition shadow-md mt-2"
            >
              Log in
            </button>
          </form>

          <p className="mt-4 md:mt-6 text-sm text-gray-500 text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#C08C4A] font-semibold cursor-pointer underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
