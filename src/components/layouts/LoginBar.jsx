import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/theme-context";
import { UserAuth } from "../context/authContext";

export default function LoginBar() {
  const { user, logOut } = UserAuth();

  const [toggle, setToggle] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      if (localTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  if (user) {
    return (
      <div
        className="flex w-full justify-end items-center
        mb-2 h-5"
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
            {user.displayName}
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
            <div
              className="origin-top-right absolute right-1 top-5 w-56 
              rounded-md 
              shadow-lg 
              dark:bg-zinc-700
              bg-amber-50
              dark:text-white 
              text-black/80
              ring-1 ring-gray-600 ring-opacity-5 focus:outline-none"
            >
              <div className="p-1" role="none">
                <ProfileOption link="/user-profile">Profile</ProfileOption>
                <ProfileOption link="/billing">Billing</ProfileOption>
                <ProfileOption link="/dashboard">Dashboard</ProfileOption>

                <button
                  className="
                block px-4 py-2 text-sm 
                dark:hover:bg-white/20 
                hover:bg-black/5
                dark:hover:text-white
                rounded-md w-full text-left
                font-semibold"
                  role="menuitem"
                  onClick={toggleDarkMode}
                >
                  Toggle Dark Mode
                </button>
                <button
                  className="
                block px-4 py-2 text-sm 
                dark:hover:bg-white/20 
                dark:hover:text-white
                rounded-md w-full text-left
                hover:bg-black/5"
                >
                  <AuthButton onClick={() => handleSignOut()}>
                    Sign out
                  </AuthButton>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div
      className="flex w-full justify-end items-center
    mb-2 h-5"
    >
      <div
        className="
        flex justify-center
        text-left bg-black/40 h-5"
      >
        <Link
          href="/login"
          className="text-black/60 inline-flex items-center justify-center px-4 py-0
          text-white text-xs hover:bg-white/20 focus:outline-none
          underline
          "
        >
          Sign in to access all feature
        </Link>
      </div>
    </div>
  );
}

function AuthButton({ onClick, children }) {
  return (
    <div
      className="md:mb-0.5
      rounded-sm
      flex-col items-center justify-center
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

function ProfileOption({ children, link }) {
  return (
    <Link
      href={link}
      className="block px-4 py-2 text-sm 
      font-semibold
      dark:hover:bg-white/20
      hover:bg-black/5
      dark:hover:text-white
      rounded-md"
      role="menuitem"
    >
      {children}
    </Link>
  );
}
