import { http } from "./http-common";

const logOut = () => http.post("/auth/logout");

const logInWithGoogle = () => http.get("/auth/google");

const authWithGoogle = (params: string) => http.get(`/auth/google/callback${params}`);

const getCurrentUser = () => http.get("/user/");

export const UserService = {
  logInWithGoogle,
  authWithGoogle,
  getCurrentUser,
  logOut,
};
