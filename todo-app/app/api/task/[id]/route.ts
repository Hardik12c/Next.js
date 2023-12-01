import { checkAuth } from "@/middleware/auth";
import { errorHandler } from "@/middleware/error";
import { Task } from "@/models/task";

export const PUT = async (req: any, { params }: any) => {
  const id = params.id;
  const user = await checkAuth(req);
  const task = await Task.findById(id);
  if (!task) {
    return errorHandler(400, "task not found");
  }
  task.isCompleted = !task.isCompleted;
  console.log(task);
  await task.save();
  return new Response(JSON.stringify(task), {
    status: 200,
  });
};
export const DELETE = async (req: any, { params }: any) => {
  const user = await checkAuth(req);
  const id = params.id;
  const task = await Task.findByIdAndDelete(id);
  return new Response(JSON.stringify("task deleted successfully"), {
    status: 200,
  });
};
