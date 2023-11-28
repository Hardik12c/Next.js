import { User } from "@/types/User";
import {create} from "zustand"

type UserState = {
  User: User;
  setUser: (User: User) => void;
};
const emptyUser: User = {
    _id: "",
    username: "",
    email: "",
    password: "",
  };
const UserStore = create<UserState>((set) => ({
  User:emptyUser,
  setUser: (user) => set({ User: user }),
  setEmptyUser: () => set({ User: emptyUser }),
}));

export default UserStore;
