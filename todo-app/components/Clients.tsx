"use client";

import UserStore from "@/Zustand/userStore";
import { Task } from "@/types/Task";
import { User } from "@/types/User";
import Link from "next/link";

export const LogoutBtn = () => {
  const User: User = UserStore((state: any) => state.User);
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
import React, { FC } from "react";

export const ToDoButton:FC<Task>=(props) : JSX.Element=> {
  const deleteHandler = (id:String) => {
    alert("Delete");
  }
  return (
    <>
      <input type="checkbox" checked={props.completed}/>
      <button className="btn" onClick={()=>deleteHandler(props.id)}>Delete</button>
    </>
  );
};
