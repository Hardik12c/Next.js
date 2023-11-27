import { errorHandler } from "@/middleware/error";
import { User } from "@/models/user";
import connectDB from "@/utils/features";
import bcrypt from "bcrypt";
export const POST = async (req: any) => {
  await connectDB();
  const { email, password } = await req.json();
  if (!email || !password) {
    return errorHandler(400, "Please provide email and password");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return errorHandler(400, "Invalid credentials");
  }
  const ismatch = await user.comparepasswords(password);
  if (!ismatch) {
    return errorHandler(400, "Invalid credentials");
  }
  const token = user.createjwt();
  return new Response(
    JSON.stringify({ token: token, user, message: "logged in successfully" }),
    {
      status: 200,
    }
  );
};
