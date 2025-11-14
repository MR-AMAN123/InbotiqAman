import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const res = await fetch("/api/auth/me");
      if (!res.ok) {
        window.location.href = "/login";
        return;
      }
      const data = await res.json();
      setUser(data.user);
    }
    loadUser();
  }, []);

  const logout = () => {
    document.cookie = "token=; Max-Age=0; path=/;";
    window.location.href = "/login";
  };

  if (!user) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white shadow-sm rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-3">Dashboard</h1>
        <p className="mb-1">Name: <b>{user.name}</b></p>
        <p className="mb-6">Role: <b>{user.role}</b></p>

        <button
          onClick={logout}
          className="w-full bg-red-500 text-white py-3 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
