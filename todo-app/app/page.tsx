import { TodoItem } from "@/components/ServerComponents";
import Form from "../components/addTodoForm";
// import { useEffect } from "react";
// import UserStore from "@/Zustand/userStore";
export default function Home() {
  return (
    <div className="container">
      <Form />
      <section className="todosContainer">
        <TodoItem
          title="Task 1"
          description="This is task 1"
          id={"23434"}
          completed={true}
        />
      </section>
    </div>
  );
}
