import Layout from "@/components/layouts/Layout";
import UserProfileCard from "@/components/layouts/UserProfileCard";
import { USER_PROFILE_DATA } from "@/data/user_profile_data";
import { useSession } from "next-auth/react";
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
