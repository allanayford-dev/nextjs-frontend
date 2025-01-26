"use client";

import React from "react";
import StoreProvider from "./redux";
import AuthProvider from "@/context/AuthProvider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex w-full flex-col bg-gray-50">{children}</main>;
};

export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <AuthProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthProvider>
    </StoreProvider>
  );
}
