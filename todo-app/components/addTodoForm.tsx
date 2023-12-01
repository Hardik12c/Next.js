"use client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const addTodoForm = () => {
  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskDescription, setTaskDescription] = React.useState("");
  const router = useRouter();
  const submitForm = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/newtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-next-token": localStorage.getItem("x-next-token") || "",
        },
        body: JSON.stringify({
          title: taskTitle,
          description: taskDescription,
        }),
      });
      if (!response.ok) return toast.error("Something went wrong");
      const json = await response.json();
      router.refresh();
      toast.success(json.message);
      setTaskTitle("");
      setTaskDescription("");
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="login">
      <section>
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </section>
    </div>
  );
};

export default addTodoForm;
