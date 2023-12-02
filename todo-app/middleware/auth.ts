import { User } from "@/models/user";
import jwt, { Secret } from "jsonwebtoken";
import { errorHandler } from "./error";

export const checkAuth = async (req: any) => {
  const authorization = req.headers.get("x-next-token");
  if (!authorization || authorization === "") {
    return null;
  }
  const token = authorization;
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_KEY as Secret);
    const user = await User.findById(decoded.id);
    if (!user) {
      return errorHandler(401, "Not authorized");
    }
    return user;
  } catch (error) {
    return errorHandler(401, "Not authorized");
  }
};
