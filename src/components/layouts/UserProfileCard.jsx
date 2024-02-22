import { LIST_FURNITURE, PRODUCT_DATA } from "@/data/product_data";
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
        <div
          className="flex md:flex-row flex-col gap-2 
        
        w-full 
        h-[80vh]
        mx-3"
        >
          <div className="bg-gray-800 text-white p-6 rounded-sm shadow-md max-w-md min-w-[300px] w-1/3">
            <div className="mb-1">
              <label className="block text-sm font-bold mb-2">
                First Name:
              </label>
              <p className="text-lg">{userProfile.firstName}</p>
            </div>

            <div className="mb-1">
              <label className=" text-sm font-bold mb-2">Last Name:</label>
              <p className="text-md">{userProfile.lastName}</p>
            </div>

            <div className="mb-1">
              <label className="text-sm font-bold mb-2">Email:</label>
              <p className="text-md">{userProfile.email}</p>
            </div>

            <div className="mb-1">
              <label className="text-sm font-bold mb-2">Phone:</label>
              <p className="text-md">{userProfile.phone}</p>
            </div>

            <div className="mb-1">
              <label className="text-sm font-bold mb-2">Address:</label>
              <p className="text-md">{userProfile.address}</p>
            </div>

            <div className="mb-1">
              <label className="text-sm font-bold mb-2">Company:</label>
              <p className="text-md">{userProfile.company}</p>
            </div>
          </div>

          <div
            className="bg-gray-800 rounded-sm shadow-md 
            w-2/3 h-full
            overflow-auto"
          >
            <table className="w-[1200px]">
              <thead>
                <tr>
                  {PRODUCT_DATA.length > 0 &&
                    Object.keys(PRODUCT_DATA[0])
                      .filter((key) => key !== "component")
                      .map((key) => (
                        <th key={key} className="text-white p-2">
                          {key}
                        </th>
                      ))}
                </tr>
              </thead>
              <tbody>
                {PRODUCT_DATA &&
                  PRODUCT_DATA.map((product, index) => (
                    <tr key={index} className="bg-black text-white">
                      {Object.values(product).map((value, subIndex) => (
                        <td key={subIndex} className="p-2  align-top">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
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
