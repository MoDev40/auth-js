import { auth } from "./auth";

const privateRoutes = ['/dashboard'];

export default auth(function(req){
    const { auth,nextUrl } = req
    const isLoggedIn = !!auth

    const isPrivateRoute = privateRoutes.some((route)=>( nextUrl.pathname.startsWith(route)))

    if(isLoggedIn && nextUrl.pathname === "/auth/sign-in"){
        return Response.redirect(new URL("/", nextUrl.origin))
    }

    if(!isLoggedIn && isPrivateRoute){
        return Response.redirect(new URL("/auth/sign-in", nextUrl.origin))
    }
    
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}