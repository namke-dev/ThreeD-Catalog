import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaAngleRight, FaHome, FaUser, FaFileAlt } from "react-icons/fa";

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
        mt-7 ml-5
        transform ${
          menuOpen ? "translate-x-full" : "translate-x-0"
        } transition-transform ease-in-out duration-300`}
        onClick={toggleMenu}
      >
        <div className="hamburger-line bg-black dark:bg-white/70 rounded-xl"></div>
        <div className="hamburger-line bg-black dark:bg-white/70 rounded-xl"></div>
        <div className="hamburger-line bg-black dark:bg-white/70 rounded-xl"></div>
      </button>

      <div
        ref={sidebarRef}
        className={`menu fixed top-0 left-0 w-3/4 md:w-[300px] bg-white/90 dark:bg-neutral-800/90 
        border-r border-gray-300  dark:border-neutral-600
        p-4 shadow h-full transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300
        pt-20
        flex flex-col gap-5
        z-10`}
      >
        <div
          className="px-1 py-4 text-lg 
          font-bold text-amber-600 text-center"
        >
          MANAGEMENT MENU
        </div>
        <SidebarButton link="/dashboard" icon={<FaHome />}>
          DASHBOARD
        </SidebarButton>
        <SidebarButton link="/account-manager" icon={<FaUser />}>
          ACCOUNT MANAGER
        </SidebarButton>
        <SidebarButton link="/posts-manager" icon={<FaFileAlt />}>
          POST MANAGER
        </SidebarButton>
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

function SidebarButton({ children, link, icon }) {
  return (
    <Link
      href={link}
      className="flex items-center px-4 py-4 text-sm font-semibold dark:hover:bg-white/20 hover:bg-black/10 dark:hover:text-white rounded-md"
      role="menuitem"
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{children}</span>

      <FaAngleRight className="ml-auto text-2xl md:group-hover:scale-125 md:group-hover:opacity-50 group-hover:text-black" />
    </Link>
  );
}
