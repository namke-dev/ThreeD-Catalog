import { USER_PROFILE_DATA } from "@/data/user_profile_data";
import { useSession } from "next-auth/react";
import React from "react";

export default function UserProfileCard() {
  const { data: session } = useSession();
  if (session) {
    const userEmail = session.user.email;
    const userProfile = USER_PROFILE_DATA.find(
      (user) => user.email == userEmail
    );
    if (userProfile) {
      return (
        <div>
          <div
            class="
          
          bg-white p-8 rounded-md shadow-md max-w-md w-full min-w-[500px]"
          >
            <h1 class="text-2xl font-semibold mb-4">Your Profile</h1>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                First Name:
              </label>
              <p class="text-gray-800 text-lg">{userProfile.firstName}</p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Last Name:
              </label>
              <p class="text-gray-800 text-lg">{userProfile.lastName}</p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <p class="text-gray-800 text-lg">{userProfile.email}</p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Phone:
              </label>
              <p class="text-gray-800 text-lg">{userProfile.phone}</p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Address:
              </label>
              <p class="text-gray-800 text-lg">{userProfile.address}</p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Company:
              </label>
              <p class="text-gray-800 text-lg">{userProfile.company}</p>
            </div>
          </div>
        </div>
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
