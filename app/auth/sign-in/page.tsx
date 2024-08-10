
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <main  className="mx-auto container flex justify-center flex-col h-screen items-center space-y-6">
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
            >
            <button className="p-2 w-full bg-slate-600 text-white shadow-md  rounded-md" type="submit">Sign-in with Google</button>
        </form>
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
            >
            <button className="p-2 w-full bg-slate-600 text-white shadow-md  rounded-md"  type="submit">Sign-in with Github</button>
        </form>
    </main>
  )
} 