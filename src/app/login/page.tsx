"use client";

import { useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return <LoginForm />;
}
