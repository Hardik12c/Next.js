"use client";
import { Toaster } from "react-hot-toast";
import "../styles/app.scss";
import Header from "./header";
import UserStore from "@/Zustand/userStore";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Todo App",
  description: "This is a Todo App Project made for Next.js series",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = UserStore((state) => state.setUser);
  useEffect(() => {
    // if (!localStorage.getItem("x-next-token")) {
    //   redirect("/login");
    // } else {
    fetch("/api/auth/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-next-token": localStorage.getItem("x-next-token") || "",
      },
    })
      .then((res) => res.json())
      .then((data: any) => setUser(data.user));
    // }
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
