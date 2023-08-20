"use client";

import UserStore from "@/Zustand/userStore";
import Link from "next/link";

export const LogoutBtn = () => {
  const User = UserStore((state: any) => state.User);
  const logoutHandler = () => {
    alert("Logout");
  };
  return User._id ? (
    <button className="btn" onClick={logoutHandler}>
      Logout
    </button>
  ) : (
    <Link href={"/login"}>Login</Link>
  );
};
