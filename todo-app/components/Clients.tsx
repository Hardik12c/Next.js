"use client";

import UserStore from "@/Zustand/userStore";
import { Task } from "@/types/Task";
import { User } from "@/types/User";
import Link from "next/link";
import toast from "react-hot-toast";

export const LogoutBtn = () => {
  const User: User = UserStore((state: any) => state.User);
  const setEmptyUser: Function = UserStore((state: any) => state.setEmptyUser);
  const logoutHandler = async () => {
    try {
      const res = await fetch("/api/auth/logout");
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      }
      localStorage.removeItem("x-next-token");
      setEmptyUser();
      toast.success(data.message);
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return User?._id ? (
    <button className="btn" onClick={logoutHandler}>
      Logout
    </button>
  ) : (
    <Link href={"/login"}>Login</Link>
  );
};
import React, { FC, useEffect } from "react";

export const ToDoButton: FC<Task> = (props): JSX.Element => {
  const deleteHandler = (id: String) => {
    alert("Delete");
  };
  return (
    <>
      <input type="checkbox" checked={props.completed} />
      <button className="btn" onClick={() => deleteHandler(props._id)}>
        Delete
      </button>
    </>
  );
};
