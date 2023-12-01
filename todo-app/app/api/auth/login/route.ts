import { errorHandler } from "@/middleware/error";
import { User } from "@/models/user";
import connectDB from "@/utils/features";
import { NextResponse } from "next/server";
export const POST = async (req: any) => {
  try {
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
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      user,
      token,
    });
    response.cookies.set("x-next-token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    console.log(error);
    return errorHandler(500, error.message);
  }
};
