import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { authConfig } from "./auth.config";

export const { handlers,auth,signIn,signOut } = NextAuth({
    ...authConfig,
    providers:[
        Google,
        Github
    ]
})