"use client";
import UserStore from "@/Zustand/userStore";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const register = () => {
  const User = UserStore((state) => state.User);
  const setUser = UserStore((state) => state.setUser);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const registerHandler = async (e: any) => {
    e.preventDefault();
    try {
      const res: any = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        return toast.error(data.message);
      }
      setUser(data.user);
      toast.success(data.message);
      localStorage.setItem("x-next-token", data.token);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  if (User._id) redirect("/");

  return (
    <div className="login">
      <section>
        <form onSubmit={registerHandler}>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <p>OR</p>
          <Link href="/login">Login</Link>
        </form>
      </section>
    </div>
  );
};

export default register;
