"use client";
import { Toaster } from "react-hot-toast";
import "../styles/app.scss";
import Header from "./header";
import UserStore from "@/Zustand/userStore";
import { useEffect } from "react";
import { redirect } from "next/navigation";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = UserStore((state) => state.setUser);
  useEffect(() => {
    fetch("/api/auth/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-next-token": localStorage.getItem("x-next-token") || "",
      },
    })
      .then((res) => res.json())
      .then((data: any) => setUser(data.user));
  }, []);
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
