import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/auth/me");
      if (!res.ok) {
        window.location.href = "/login";
        return;
      }
      const data = await res.json();
      setUser(data.user);
    }
    load();
  }, []);

  if (!user)
    return <div className="p-10 text-center text-lg">Loading...</div>;

  return (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-700 mb-2">
          <b>Name:</b> {user.name}
        </p>

        <p className="text-gray-700 mb-6">
          <b>Role:</b> {user.role}
        </p>

        <p className="text-gray-500">
          You are successfully logged in and accessing a protected route.
        </p>
      </div>
    </div>
  );
}
