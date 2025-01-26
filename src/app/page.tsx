"use client";

import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { user } = useAuth(); // ✅ Now this will work without errors
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-lg rounded-md bg-white p-6 shadow-md">
        <h1 className="text-center text-3xl font-bold">Welcome to the App</h1>
        {user ? (
          <>
            <p className="mt-4 text-center">
              You are logged in as {user.name}.
            </p>
            <button
              className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white"
              onClick={() => router.push("/dashboard")}
            >
              Go to Dashboard
            </button>
          </>
        ) : (
          <>
            <p className="mt-4 text-center">
              Please log in to access your account.
            </p>
            <button
              className="mt-4 w-full rounded-md bg-green-500 px-4 py-2 text-white"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </>
        )}
      </div>
    </main>
  );
}
