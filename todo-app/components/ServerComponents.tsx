import React, { FC } from "react";
import { Task } from "../types/Task";
import { ToDoButton } from "./Clients";

export const TodoItem: FC<Task> = (task): JSX.Element => {
  return (
    <div className="todo">
      <div>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
      </div>
      <div>
        <ToDoButton
          title={""}
          description={""}
          _id={task._id}
          completed={false}
        />
      </div>
    </div>
  );
};
