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
        bg-black/30"
      >
        <div class="relative inline-block text-left">
          <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-2
            text-white text-sm hover:bg-white/20 focus:outline-none"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {session.user.email}
            <svg
              class="-mr-1 h-2 w-5 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 19a1 1 0 01-.7-.29l-8-8a1 1 0 011.4-1.42L10 16.58l7.3-7.3a1 1 0 111.4 1.42l-8 8a1 1 0 01-.7.3z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {toggle && (
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1" role="none">
                <Link
                  href="/user-profile"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Profile
                </Link>
                <Link
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Billing
                </Link>
                <button
                  onclick="signOut()"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Sign Out
                </button>
                <button
                  onclick="toggleDarkMode()"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Toggle Dark Mode
                </button>
                <button
                  onclick="toggleDarkMode()"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
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
    <button
      className="md:mb-0.5
      md:mx-1
      md:px-4
      rounded-sm
      flex-col items-center justify-center
      hover:text-amber-600
      hover:border-amber-600
      font-medium
      text-xs
      underline
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
