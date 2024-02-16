import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginOption() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div
        className="flex w-full justify-end items-center
        "
      >
        <span className="text-xs">{session.user.email}</span>
        <button
          className="md:mt-1
          md:mx-1
          md:px-4
          md:ml-5
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
      </div>
    );
  }
  return (
    <div className="flex w-full justify-end items-center">
      <span className="text-xs">User not login</span>
      <button
        className="md:mt-1
        md:mx-1
        md:px-4
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
    </div>
  );
}
