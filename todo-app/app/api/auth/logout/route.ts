export const GET = async (req: any) => {
  return new Response(JSON.stringify({ message: "Logout successful" }), {
    status: 200,
  });
};
