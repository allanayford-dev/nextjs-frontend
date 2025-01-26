"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // ✅ Redirect to login if not authenticated
    }
  }, [user, router]);

  if (!user) {
    return <p>Loading user data...</p>; // ✅ Prevents flash of unauthorized content
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
      <button
        onClick={logout}
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white"
      >
        Logout
      </button>
    </main>
  );
}
