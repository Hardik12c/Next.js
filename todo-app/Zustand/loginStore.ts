import { User } from "@/types/User";
import { create } from "zustand";

type UserState = {
  User: User;
  setLoading: (User: User) => void;
};
const emptyUser: User = {
    _id: "",
    username: "",
    email: "",
    password: "",
  };
const UserStore = create<UserState>((set) => ({
  User:emptyUser,
  setLoading: (user) => set({ User: user }),
}));

export default UserStore;
