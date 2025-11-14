import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (document.cookie.includes("token=")) {
      setLoggedIn(true);
    }
  }, []);

  const logout = () => {
    document.cookie = "token=; Max-Age=0; path=/;";
    window.location.href = "/login";
  };

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold text-blue-600">
        RoleAuth
      </Link>

      <div className="space-x-4">
        {!loggedIn ? (
          <>
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Dashboard
            </Link>

            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
