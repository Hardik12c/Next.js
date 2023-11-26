import { checkAuth } from "@/middleware/auth";
import { errorHandler } from "@/middleware/error";
import { Task } from "@/models/task";
import connectDB from "@/utils/features";

export const POST = async (req: any) => {
  await connectDB();
  const user = await checkAuth(req);
  const { title, description } = await req.json();
  if (!title || !description) {
    return errorHandler(400, "Please provide title and description");
  }
  await Task.create({ title, description, user: user._id });
  return new Response("Hello World", {
    status: 200,
  });
};
