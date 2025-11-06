import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <h1 className="text-4xl font-extrabold mb-6 tracking-wide text-center">
        Welcome to <span className="text-indigo-500">Auth Demo</span> 🚀
      </h1>
      <p className="text-gray-400 mb-8 text-center">
        Please login or signup to continue your journey.
      </p>

      <div className="flex space-x-6">
        <Link
          to="/login"
          className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition-all duration-200"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-md transition-all duration-200"
        >
          Signup
        </Link>
      </div>

      <button
        onClick={login}
        className="mt-10 text-sm text-gray-400 hover:text-indigo-400 transition-all"
      >
        or click here to login 👉
      </button>
    </div>
  );
};
