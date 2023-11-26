import { checkAuth } from "@/middleware/auth";
import { Task } from "@/models/task";
import connectDB from "@/utils/features";

export const GET = async (req: any) => {
  await connectDB();
  const user: any = await checkAuth(req);
  const tasks = await Task.find({ user: user.id });
  return new Response(JSON.stringify(tasks), {
    status: 200,
  });
};
