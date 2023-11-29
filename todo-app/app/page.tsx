import { TodoItem } from "@/components/ServerComponents";
import Form from "../components/addTodoForm";
import toast from "react-hot-toast";

const fetchTodo = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/mytasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "x-next-token": localStorage.getItem("x-next-token") || "",
      },
      cache: "no-cache",
    });
    console.log(res);
    if (!res.ok) {
      return [];
    }
    console.log("heello");
    const data = await res.json();
    return data;
  } catch (err: any) {
    console.log(err);
    return [];
  }

};
export default async function Home() {
  const tasks = await fetchTodo();
  console.log(tasks); 
  return (
    <div className="container">
      <Form />
      <section className="todosContainer">
        {tasks.map((task: any) => (
          <TodoItem
            title={task.title}
            description={task.description}
            _id={task._id}
            completed={task.completed}
          />
        ))}
      </section>
    </div>
  );
}
