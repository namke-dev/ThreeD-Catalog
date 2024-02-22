import Layout from "@/components/layouts/Layout";
import UserProfileCard from "@/components/layouts/UserProfileCard";
import React from "react";

export default function UserProfile() {
  return (
    <Layout>
      <div
        className="h-full w-full flex flex-col
        items-center justify-center pt-20
        px-10 gap-5
      "
      >
        <div className="text-white text-3xl w-full ml">Your profile</div>
        <UserProfileCard />
      </div>
    </Layout>
  );
}
