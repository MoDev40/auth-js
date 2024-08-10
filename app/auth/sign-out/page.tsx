import { signOut } from '@/auth'

const SignOut = () => {
  return (
    <form
      className="mx-auto container flex justify-center flex-col h-screen items-center space-y-6"
      action={async () => {
        "use server"
        await signOut({redirectTo:"/auth/sign-in"})
      }}
    >
      <button className="py-2 px-10  bg-red-600 text-white shadow-md  rounded-md" type="submit">Sign-Out</button>
    </form>  )
}

export default SignOut