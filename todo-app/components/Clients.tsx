"use client";

import UserStore from "@/Zustand/userStore";
import { Task } from "@/types/Task";
import { User } from "@/types/User";
import Link from "next/link";
import toast from "react-hot-toast";

export const LogoutBtn = () => {
  const router = useRouter();
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
      router.push("/login");
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
import React, { FC } from "react";
import { useRouter } from "next/navigation";

export const ToDoButton: FC<Task> = (props): JSX.Element => {
  const router = useRouter();
  const deleteHandler = async (id: String) => {
    try {
      const data = await fetch(`/api/task/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-next-token": localStorage.getItem("x-next-token") || "",
        },
      });
      if (!data.ok) {
        return toast.error("Something went wrong");
      }
      router.refresh();
      toast.success("Task Deleted");
    } catch (error) {}
  };
  const updateHandler = async (id: String) => {
    try {
      const data = await fetch(`/api/task/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-next-token": localStorage.getItem("x-next-token") || "",
        },
      });
      if (!data.ok) {
        return toast.error("Something went wrong");
      }
      toast.success("Task updated successfully");
      router.refresh();
    } catch (error) {}
  };
  return (
    <>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => updateHandler(props._id)}
      />
      <button className="btn" onClick={() => deleteHandler(props._id)}>
        Delete
      </button>
    </>
  );
};
