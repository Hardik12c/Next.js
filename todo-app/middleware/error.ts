export const errorHandler=(statusCode=500,message="Something went wrong")=>{
    return new Response(message,{
        status:statusCode
    })
}