import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // make sure it's installed

export const Signup = () => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");

  async function Onsubmit() {
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        name,
        pass,
      });
      Swal.fire({
        title: "Signup Successful 🎉",
        text: response.data.reply,
        icon: "success",
        confirmButtonColor: "#2563eb",
      });
      console.log(response.data.reply);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Signup failed. Please try again.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="bg-slate-800/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-slate-700">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Create an Account ✨
        </h2>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
          />

          <button
            onClick={Onsubmit}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
