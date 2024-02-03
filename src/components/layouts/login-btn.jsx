import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        User {session.user.email} <br />
        <button
          className="md:my-1
         md:mx-1
         md:px-4
         md:py-2
         rounded-sm
         flex-col items-center justify-center
         hover:text-amber-600
         hover:border-amber-600
         font-medium
         text-xs
         md:text-sm
         border border-white/70"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      {/* Not signed in <br /> */}
      <button
        className="md:my-1
       md:mx-1
       md:px-4
       md:py-2
       rounded-sm
       flex-col items-center justify-center
       hover:text-amber-600
       hover:border-amber-600
       font-medium
       text-xs
       md:text-sm
       border border-white/70"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
