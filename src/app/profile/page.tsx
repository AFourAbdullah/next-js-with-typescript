"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const [userId, setUserId] = useState("");
  async function getDetails() {
    const response = await axios.get("/api/users/me");
    setUserId(response.data.data._id);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <h2>
        {userId == "" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${userId}`}>Go to Your Profile</Link>
        )}
      </h2>
      <button
        onClick={getDetails}
        className="p-2 bg-slate-900 text-white hover:bg-slate-700 cursor-pointer border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Get Details
      </button>
    </div>
  );
}
