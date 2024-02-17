import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBar() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div
        className="flex w-full justify-end items-center
        bg-black/10
        "
      >
        <span className="text-xs">{session.user.email}</span>

        <AuthButton onClick={() => signOut()}>Sign out</AuthButton>
      </div>
    );
  }
  return (
    <div className="flex w-full justify-end items-center">
      <span className="text-xs">User not login</span>
      <AuthButton onClick={() => signIn()}>Sign in</AuthButton>
    </div>
  );
}

function AuthButton({ onClick, children }) {
  return (
    <button
      className="md:my-1
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
      onClick={onClick}
    >
      {children}
    </button>
  );
}
