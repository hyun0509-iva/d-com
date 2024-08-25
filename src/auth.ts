import NextAuth from "next-auth";
import { authConfig } from "./app/utils/authConfig";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth(authConfig);
