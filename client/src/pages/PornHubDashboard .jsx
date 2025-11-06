import React from "react";

export const PornHubDashboard = ({user}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-800 text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-orange-500">
          Porn<span className="text-white">Hub</span> Dashboard 😎
        </h1>
        <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg font-medium transition-all">
          Logout
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col md:flex-row gap-6 p-8">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-zinc-900/70 border border-zinc-800 rounded-xl p-4 space-y-3 backdrop-blur-sm">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li className="hover:bg-zinc-800 rounded-lg px-3 py-2 cursor-pointer transition-all">
              🔥 Trending
            </li>
            <li className="hover:bg-zinc-800 rounded-lg px-3 py-2 cursor-pointer transition-all">
              ❤️ Favorites
            </li>
            <li className="hover:bg-zinc-800 rounded-lg px-3 py-2 cursor-pointer transition-all">
              🕒 Watch History
            </li>
            <li className="hover:bg-zinc-800 rounded-lg px-3 py-2 cursor-pointer transition-all">
              ⚙️ Settings
            </li>
          </ul>
        </aside>

        {/* Main Dashboard */}
        <section className="flex-1 bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-orange-400">
            Welcome Back, {user?.name} 😏
          </h2>
          <p className="text-gray-400 mb-6">
            This is your personalized hub dashboard. Enjoy your stay 😉
          </p>

          {/* Example stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-zinc-800 rounded-lg border border-zinc-700 text-center hover:scale-[1.02] transition-all">
              <h3 className="text-lg font-semibold">🔥 Trending Views</h3>
              <p className="text-3xl font-bold text-orange-500 mt-2">12.4K</p>
            </div>

            <div className="p-4 bg-zinc-800 rounded-lg border border-zinc-700 text-center hover:scale-[1.02] transition-all">
              <h3 className="text-lg font-semibold">❤️ Likes</h3>
              <p className="text-3xl font-bold text-pink-500 mt-2">9.2K</p>
            </div>

            <div className="p-4 bg-zinc-800 rounded-lg border border-zinc-700 text-center hover:scale-[1.02] transition-all">
              <h3 className="text-lg font-semibold">📺 Watch Time</h3>
              <p className="text-3xl font-bold text-indigo-500 mt-2">47h</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t border-zinc-800 text-gray-500 text-sm">
        © 2025 Hub Studios. All rights reserved 😜
      </footer>
    </div>
  );
};
