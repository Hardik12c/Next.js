import { errorHandler } from "@/middleware/error";
import { User } from "@/models/user";
import connectDB from "@/utils/features";

export const POST = async (req: any) => {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return errorHandler(400, "Please provide name, email and password");
  }
  await connectDB();
  const user = await User.findOne({ email });
  if (user) {
    return errorHandler(400, "User already exists");
  }
  const newUser = await User.create({ name, email, password });
  return new Response(JSON.stringify(newUser), {
    status: 200,
  });
};
