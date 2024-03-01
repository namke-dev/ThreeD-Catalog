import React from "react";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import PageHeader from "@/components/layouts/PageHeader";
import { USER_PROFILE_DATA } from "@/data/user_profile_data";
import { FaTrash, FaBan, FaEdit } from "react-icons/fa";

export default function AccountManager() {
  return (
    <Layout>
      <PageHeader>Account Management</PageHeader>
      <HomePageCart className="!pt-10 !pb-32">
        <div className="flex flex-row gap-4 text-lg">
          <div className="flex-1">
            <div className="h-[80vh] py-10 px-16 rounded-lg bg-white text-black">
              <div className="text-2xl font-semibold mb-8 text-center">
                Account Management
              </div>
              <table className="w-full dark:text-black border border-collapse">
                <thead className="bg-neutral-600 text-white">
                  <tr>
                    <th className="border p-2">ID</th>
                    <th className="border p-2">First Name</th>
                    <th className="border p-2">Last Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Phone</th>
                    <th className="border p-2">Address</th>
                    <th className="border p-2">Company</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {USER_PROFILE_DATA.map((user, index) => (
                    <tr
                      key={user.id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-200" : ""
                      } border`}
                    >
                      <td className="border p-2">{user.id}</td>
                      <td className="border p-2">{user.firstName}</td>
                      <td className="border p-2">{user.lastName}</td>
                      <td className="border p-2">{user.email}</td>
                      <td className="border p-2">{user.phone}</td>
                      <td className="border p-2">{user.address}</td>
                      <td className="border p-2">{user.company}</td>
                      <td className="border p-2 flex space-x-2">
                        <FaTrash />
                        <FaBan />
                        <FaEdit />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </HomePageCart>
    </Layout>
  );
}
