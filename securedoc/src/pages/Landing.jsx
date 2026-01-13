import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

import secureguys from "../assets/secureguys.png";
import securedocwoman1 from "../assets/securedocwoman1.png";
import securedocwoman2 from "../assets/securedocwoman2.png";
import secureDoc3 from "../assets/securedoc3.png"
import securedocshield from "../assets/securedocshield.png";

const ROLES = [
  {
    id: "lecturer",
    title: "Lecturer",
    description: "Review and verify student submissions securely.",
    img: securedocwoman1,
  },
  {
    id: "student",
    title: "Student",
    description: "Securely upload and track your academic documents.",
    img: securedocwoman2,
  },
  {
    id: "storage",
    title: "Storage",
    description: "Securely store personal documents.",
    img: securedocshield,
  },
];

export default function Landing() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isDark, setIsDark] = useDarkMode();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col lg:flex-row lg:justify-between bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* LEFT */}
      <section className="w-full lg:w-[60%] px-6 sm:px-10 lg:px-16 py-12 flex flex-col justify-center">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <img
            src={securedocshield}
            alt="SecureDoc"
            className="w-16 object-contain"
          />

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:scale-105 transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <h1 className="mt-8 text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
          Welcome to SecureDoc
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Select your role to get started.
        </p>

        {/* Role Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLES.map((role) => {
            const active = selectedRole === role.id;

            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`relative text-left rounded-2xl p-5 backdrop-blur-xl transition-all duration-300
                  ${
                    active
                      ? "ring-2 ring-amber-400 bg-white/80 dark:bg-zinc-900/80 shadow-xl"
                      : "bg-white/60 dark:bg-zinc-900/60 shadow-lg hover:shadow-xl"
                  }`}
              >
                {/* Chevron */}
                <span
                  className={`absolute top-4 right-4 transition-transform duration-300
                    ${
                      active
                        ? "text-amber-400 translate-x-1"
                        : "text-gray-400"
                    }`}
                >
                  <ChevronRight />
                </span>

                <img
                  src={role.img}
                  alt={role.title}
                  className="w-12 h-12 object-contain mb-4"
                />

                <h3 className="font-medium text-gray-900 dark:text-white">
                  {role.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {role.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* SINGLE CTA */}
        <button
          onClick={() => {
            localStorage.setItem("role", selectedRole);
            navigate("/signup");
          }}
          disabled={!selectedRole}
          className={`mt-10 w-full sm:w-56 py-3 rounded-full text-sm font-medium transition-all duration-300
            ${
              selectedRole
                ? "bg-amber-400 text-black hover:bg-amber-500 hover:scale-105"
                : "bg-gray-100 dark:bg-zinc-800 text-gray-400 cursor-not-allowed"
            }`}
        >
          Create account
        </button>
      </section>

      {/* RIGHT */}
      <section className="hidden lg:flex h-full items-center justify-end">
        <div
          className="w-fit h-screen"
        >
          <img
            src={secureDoc3}
            alt="SecureDoc Illustration"
            className="drop-shadow-2xl h-screen"
          />
        </div>
      </section>
    </motion.div>
  );
}
