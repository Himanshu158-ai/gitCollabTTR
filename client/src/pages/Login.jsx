import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // make sure you have this imported
import { useNavigate } from "react-router-dom";

export const Login = ({setUser}) => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");

  const navigate = useNavigate()

  async function Onsubmit() {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        name,
        pass,
      });
      if(response.data) setUser(response.data?.user)
        console.log(response.data?.user);
        
      Swal.fire({
        title: "Success",
        text: response.data?.userId,
        icon: "success",
        confirmButtonColor: "#2563eb",
      });
      console.log(response.data?.user);
    if(response.data) navigate(`/dashboard`)
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Login failed. Please check your credentials.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="bg-slate-800/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-slate-700">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Welcome Back 👋
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
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
