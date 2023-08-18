"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, [user]);
  const signup = async () => {
    if (!user.email || !user.password || !user.username) {
      return toast.error("All fields are mandatory");
    }
    try {
      setLoading(true);
      const { data } = await axios.post("/api/users/signup", user);
      if (data.error) {
        return toast.error(data.error);
      }
      console.log("signup response is", data);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Signing Up..." : "Signup"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="border border-1 rounded-lg p-1 mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        placeholder="username..."
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
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
