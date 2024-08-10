import { NextAuthConfig } from "next-auth";
import prisma from "./lib/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authConfig = {
    adapter:PrismaAdapter(prisma),
    callbacks:{
        async authorized({request:{ nextUrl },auth}){
            const isLogin = !!auth?.user
            
            return isLogin;
        }
    },
    providers:[],
    pages:{
        signIn:"/auth/sign-in",
        signOut:"/auth/sign-out"
    }
} satisfies NextAuthConfig