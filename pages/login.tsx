import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) window.location.href = "/dashboard";
    else alert("Invalid credentials");
  };

  return (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h1>

        <form onSubmit={submit} className="space-y-4">
          <input
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
