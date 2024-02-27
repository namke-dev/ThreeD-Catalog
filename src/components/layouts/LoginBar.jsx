import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginBar() {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);

  if (session) {
    return (
      <div
        className="flex w-full justify-end items-center
        mb-2"
      >
        <div
          className="
        flex justify-center
        h-auto text-left bg-black/40 "
        >
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-0
            text-white text-xs hover:bg-white/20 focus:outline-none"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {session.user.email}
            <svg
              className="-mr-1 h-2 w-5 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 19a1 1 0 01-.7-.29l-8-8a1 1 0 011.4-1.42L10 16.58l7.3-7.3a1 1 0 111.4 1.42l-8 8a1 1 0 01-.7.3z" />
            </svg>
          </button>

          {toggle && (
            <div className="origin-top-right absolute right-1 top-8 w-56 rounded-md shadow-lg bg-neutral-800 text-white ring-1 ring-gray-600 ring-opacity-5 focus:outline-none">
              <div className="py-1 px-1 md:px-2" role="none">
                <Link
                  href="/user-profile"
                  className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white"
                  role="menuitem"
                >
                  Profile
                </Link>
                <Link
                  href="/billing"
                  className="block px-4 py-2 text-sm hover:bg-gray-600 hover:text-white"
                  role="menuitem"
                >
                  Billing
                </Link>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  Toggle Dark Mode
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-600 hover:text-white">
                  <AuthButton onClick={() => signOut()}>Sign out</AuthButton>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-full justify-end items-center">
      <AuthButton onClick={() => signIn()}>Sign in</AuthButton>
    </div>
  );
}

function AuthButton({ onClick, children }) {
  return (
    <div
      className="md:mb-0.5
      rounded-sm
      flex-col items-center justify-center
      hover:text-amber-600
      hover:border-amber-600
      font-medium
      text-sm
      underline
      "
      onClick={onClick}
    >
      {children}
    </div>
  );
}