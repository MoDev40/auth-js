import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthConfig } from "next-auth";
import prisma from "./lib/client";


export const authConfig = {
    adapter:PrismaAdapter(prisma),
    session:{
        strategy:"jwt",
    },
    callbacks:{
        async authorized({ auth }){
            return !!auth;
        }
    },
    providers:[],
    pages:{
        signIn:"/auth/sign-in",
        signOut:"/auth/sign-out"
    }
} satisfies NextAuthConfig