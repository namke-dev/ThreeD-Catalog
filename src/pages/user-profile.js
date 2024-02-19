import { USER_PROFILE_DATA } from "@/data/user_profile_data";
import { useSession } from "next-auth/react";
import React from "react";

export default function UserProfile() {
  const { data: session } = useSession();
  if (session) {
    const userEmail = session.user.email;
    const userProfile = USER_PROFILE_DATA.find(
      (profile) => profile.email == userEmail
    );
    if (userProfile) {
      return (
        <>
          <div>user-profile: {userProfile.firstName}</div>
        </>
      );
    } else {
      return (
        <div>Email: {userEmail}, no account assiciate with this email!</div>
      );
    }
  } else {
    return <div>User has not login!</div>;
  }
}
