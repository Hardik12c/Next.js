import { User } from "@/models/user";
import jwt from "jsonwebtoken";

export const checkAuth=async(req:any)=>{
    const authorization=req.header("x-next-token");
    if(!authorization){
        return new Response(JSON.stringify({message:"Not authorized"}),{
            status:401
        })
    }
    const token=authorization;
    try {
        const decoded:any=await jwt.verify(token,process.env.JWT_SECRET);
        return await User.findById(decoded.id);
    } catch (error) {
        return new Response(JSON.stringify({message:"Not authorized"}),{
            status:401
        })
    }
}