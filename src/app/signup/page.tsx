"use client";
import Link from "next/link";
import React, { useState } from "react";
export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const signup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="border border-1 rounded-lg p-1 mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        placeholder="username..."
        id="username"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
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
        onClick={signup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Signup
      </button>
      <Link href="/login">Login here</Link>
    </div>
  );
}
