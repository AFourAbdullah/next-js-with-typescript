"use client";
import Link from "next/link";
import React, { useState } from "react";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl mb-3">Login</h1>
      <hr className="bg-black w-full" />

      <label htmlFor="email">Email</label>
      <input
        className="border border-1 rounded-lg p-1 mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        placeholder="email..."
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="border border-1 rounded-lg p-1 mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        placeholder="password..."
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={login}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login
      </button>
      <Link href="/signup">Signup Here</Link>
    </div>
  );
}
