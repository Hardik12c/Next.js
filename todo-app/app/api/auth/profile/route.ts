import { checkAuth } from "@/middleware/auth";

export const GET = async (req: any) => {
  const user = await checkAuth(req);
  return new Response(JSON.stringify(user), {
    status: 200,
  });
};
