import { LIST_FURNITURE } from "@/data/product_data";
import { USER_PROFILE_DATA } from "@/data/user_profile_data";
import { useSession } from "next-auth/react";
import React from "react";

export default function UserProfileCard() {
  const { data: session } = useSession();
  const list_product = LIST_FURNITURE;
  console.log(list_product);
  if (session) {
    const userEmail = session.user.email;
    const userProfile = USER_PROFILE_DATA.find(
      (user) => user.email == userEmail
    );
    if (userProfile) {
      return (
        <div className="flex md:flex-row flex-col gap-2 w-full mx-3">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md min-w-[300px] w-1/3">
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name:
              </label>
              <p className="text-gray-800 text-lg">{userProfile.firstName}</p>
            </div>

            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name:
              </label>
              <p className="text-gray-800 text-md">{userProfile.lastName}</p>
            </div>

            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <p className="text-gray-800 text-md">{userProfile.email}</p>
            </div>

            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone:
              </label>
              <p className="text-gray-800 text-md">{userProfile.phone}</p>
            </div>

            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address:
              </label>
              <p className="text-gray-800 text-md">{userProfile.address}</p>
            </div>

            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Company:
              </label>
              <p className="text-gray-800 text-md">{userProfile.company}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md w-2/3">
            {list_product &&
              list_product.map((product, index) => {
                <div key={index} className="bg-black text-white">
                  {product[label]}
                </div>;
              })}
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
