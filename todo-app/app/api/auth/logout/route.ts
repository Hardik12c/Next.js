import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const response = NextResponse.json({
    message: "Logout successful",
    success: true,
  });
  response.cookies.set("x-next-token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return response;
};
