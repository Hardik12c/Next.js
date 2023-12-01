"use client";
import UserStore from "@/Zustand/userStore";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const User = UserStore((state) => state.User);
  console.log(User);
  if (!User || !User._id) redirect("/login");
  return (
    <div>
      <h1>Profile</h1>
      <h2>{User.name}</h2>
      <h2>{User.email}</h2>
    </div>
  );
};

export default page;
