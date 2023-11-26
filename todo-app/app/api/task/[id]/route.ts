import { checkAuth } from "@/middleware/auth";
import { errorHandler } from "@/middleware/error";
import { Task } from "@/models/task";

export const PUT = async (req: any,{params}:any) => {
  const id = params.id;
  const user=await checkAuth(req);
  const { title, description, completed } = await req.json();
  if (!title || !description) {
    return errorHandler(400, "Please provide title and description");
  }
  const task:any = await Task.findByIdAndUpdate(
    id,
    { title, description, completed },
    { new: true }
  );
  console.log(task);
  return new Response(JSON.stringify(task), {
    status: 200,
  });
};
export const DELETE = async (req:any,{ params }: any) => {
  const user=await checkAuth(req);
  const id = params.id;
  const task = await Task.findByIdAndDelete(id);
  return new Response(JSON.stringify("task deleted successfully"), {
    status: 200,
  });
};
