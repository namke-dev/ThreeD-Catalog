import Link from "next/link";
import React from "react";

export default function MessengerBuble() {
  return (
    <a
      href="https://m.me/191262744078774"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="
      rounded-full 
      h-[70px] w-[70px]
      fixed bottom-3 right-3 md:bottom-7 md:right-7
      z-50
      border border-gray-300 dark:border-gray-700
      bg-gray-100
      dark:bg-gray-600
      opacity-80
      flex justify-center items-center text-center
      p-3
      shadow-xl
      shadow-stone-400
      dark:shadow-stone-900"
      >
        <img src="/images/facebook-messenger-icon.png" />
      </div>
    </a>
  );
}
