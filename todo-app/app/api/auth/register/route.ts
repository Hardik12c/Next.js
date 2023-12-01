import { errorHandler } from "@/middleware/error";
import { User } from "@/models/user";
import connectDB from "@/utils/features";
import { NextResponse } from "next/server";

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
  const token = newUser.createjwt();

  const response = NextResponse.json({
    message: "Login successful",
    success: true,
    user: newUser,
    token,
  });
  response.cookies.set("x-next-token", token, {
    httpOnly: true,
  });
  return response;
};
