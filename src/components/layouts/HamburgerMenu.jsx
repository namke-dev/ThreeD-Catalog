import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenuOnOutsideClick = (event) => {
    if (
      menuOpen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      event.clientX > sidebarRef.current.offsetWidth
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      window.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 z-40">
      <button
        className={`focus:outline-none flex flex-col justify-around h-6 w-6 
        mt-8 ml-5
        transform ${
          menuOpen ? "translate-x-full" : "translate-x-0"
        } transition-transform ease-in-out duration-300`}
        onClick={toggleMenu}
      >
        <div className="hamburger-line bg-black dark:bg-white"></div>
        <div className="hamburger-line bg-black dark:bg-white"></div>
        <div className="hamburger-line bg-black dark:bg-white"></div>
      </button>

      <div
        ref={sidebarRef}
        className={`menu fixed top-0 left-0 w-1/3 bg-white/90 dark:bg-neutral-800/90 
        border border-gray-300  dark:border-neutral-600
        p-4 shadow h-full transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300
        pt-20
        flex flex-col gap-5
        z-10`}
      >
        <SidebarButton link="/dashboard">Dashboard</SidebarButton>
        <SidebarButton link="/dashboard">Account Manager</SidebarButton>
        <SidebarButton link="/dashboard">Post Manager</SidebarButton>
      </div>

      <style jsx>{`
        .hamburger-line {
          width: 1.7rem;
          height: 0.2rem;
        }
      `}</style>
    </div>
  );
};

export default HamburgerMenu;

function SidebarButton({ children, link }) {
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
