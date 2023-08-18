"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!user.email || !user.password) {
      return toast.error("All fields are mandatory");
    }
    try {
      setLoading(true);
      const { data } = await axios.post("/api/users/login", user);
      console.log("login response is", data);
      toast.success(JSON.stringify(data));
      router.push(`/profile/${data.user._id}`);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl mb-3">{loading ? "Logging In..." : "Login"}</h1>
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
