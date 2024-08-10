
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <main>
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
            >
            <button type="submit">Sign-in with Google</button>
        </form>
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
            >
            <button type="submit">Sign-in with Github</button>
        </form>
    </main>
  )
} 