import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const connectDB = async() => {
  await mongoose.connect(process.env.connectionstring as string);
};
// utils.js

import { setCookie } from 'js-cookie';

export const setToken = (token: string) => {
  setCookie('x-next-token', token, { expires: 7 });
};

export default connectDB;
