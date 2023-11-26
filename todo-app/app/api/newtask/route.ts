import { errorHandler } from "@/middleware/error";
import { Task } from "@/models/task";
import connectDB from "@/utils/features";

export const POST = async(req: any) => {
    await connectDB();
    const {title,description} = await req.json();
    if(!title || !description){
        return errorHandler(400,"Please provide title and description");
    }
    await Task.create({title,description,user:"64f39699ff56cae9600e4a04"});
  return new Response("Hello World", {
    status: 200,    
  });
};


