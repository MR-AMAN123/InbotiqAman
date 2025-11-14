import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const submit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) window.location.href = "/login";
    else alert("Signup failed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-sm rounded-xl p-6 w-full max-w-sm">
        <h1 className="text-xl font-semibold text-center mb-4">Create Account</h1>

        <form onSubmit={submit} className="space-y-3">
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="w-full p-3 border rounded-lg"
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <select
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
