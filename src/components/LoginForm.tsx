"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";

const LoginForm = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm rounded-md bg-white p-6 shadow-md">
        <h1 className="text-center text-2xl font-semibold">Login</h1>
        {error && <p className="text-sm text-red-500">{error}</p>}
        {
          <p>
            NEXT_PUBLIC_API_BASE_URL: {process.env.NEXT_PUBLIC_API_BASE_URL}
          </p>
        }
        {<p>REACT_APP_API_BASE_URL: {process.env.REACT_APP_API_BASE_URL}</p>}
        {<p>API_BASE_URL: {process.env.API_BASE_URL}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
