import Layout from "@/components/layouts/Layout";
import UserProfileCard from "@/components/layouts/UserProfileCard";
import React from "react";

export default function UserProfile() {
  return (
    <Layout>
      <div
        className="h-full w-full flex
      items-center justify-center mt-28"
      >
        <UserProfileCard />
      </div>
    </Layout>
  );
}
