"use client";
import UserStore from "@/Zustand/userStore";
import { redirect } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

const login = () => {
  const User = UserStore((state) => state.User);
  const setUser = UserStore((state) => state.setUser);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginHandler = async (e: any) => {
    e.preventDefault();
    try {
      const res: any = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("x-next-token", data.token);
    } catch (error) {}
  };
  if (User._id) redirect("/");
  return (
    <div className="login">
      <section>
        <form onSubmit={loginHandler}>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
          <button type="submit">Login</button>
          <p>OR</p>
          <Link href="/register">New User</Link>
        </form>
      </section>
    </div>
  );
};

export default login;
