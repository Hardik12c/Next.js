import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const connectDB = async() => {
  await mongoose.connect(process.env.connectionstring as string);
};

export default connectDB;
