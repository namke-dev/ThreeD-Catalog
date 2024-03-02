import { PRODUCT_DATA } from "@/data/product_data";
import { USER_PROFILE_DATA } from "@/data/user_profile_data";
import React from "react";
import { UserAuth } from "../context/auth-context";
import { sendEmailVerification } from "firebase/auth";

export default function UserProfileCard() {
  const { user } = UserAuth();
  console.log("User obj: ");
  console.log(user);

  const handleUserVerification = async () => {
    try {
      console.log("Verification email sent to " + user.email);
      sendEmailVerification(user);
    } catch (error) {
      console.error("Failed to send verification email:", error);
    }
  };

  if (user) {
    const userEmail = user.email;
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
          <div
            className="
            p-6 rounded-lg 
            bg-white text-black
            
            max-w-md min-w-[300px] w-1/3"
          >
            <div className="my-3 w-full flex justify-center items-center">
              {user && user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={`${user.email}'s avatar`}
                  className="rounded-full h-[120px] "
                />
              )}
            </div>
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
            {!user.emailVerified ? (
              <button
                onClick={handleUserVerification}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4"
              >
                Verify Email
              </button>
            ) : (
              <div className="bg-green-600 text-white text-center rounded-lg w-[70px]">
                Verified
              </div>
            )}
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
            className="
            w-2/3 h-full
            overflow-auto
            
            p-0 rounded-lg 
            bg-neutral-600 text-black"
          >
            <table className="w-[1200px]">
              <thead className="bg-neutral-600 text-white">
                <tr>
                  {PRODUCT_DATA.length > 0 &&
                    Object.keys(PRODUCT_DATA[0])
                      .filter((key) => key !== "component")
                      .map((key) => (
                        <th key={key} className=" p-2">
                          {key}
                        </th>
                      ))}
                </tr>
              </thead>
              <tbody>
                {PRODUCT_DATA &&
                  PRODUCT_DATA.map((product, index) => (
                    <tr key={index} className="">
                      {Object.values(product).map((value, subIndex) => (
                        <td
                          key={subIndex}
                          className={`p-2  align-top ${
                            index % 2 === 0 ? "bg-gray-200" : "bg-white"
                          } border border-neutral-300`}
                        >
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
