import React from "react";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import PageHeader from "@/components/layouts/PageHeader";
import { news_data } from "@/data/news_data";
import { FaTrash, FaBan, FaEdit } from "react-icons/fa";
import Link from "next/link";

export default function PostManager() {
  return (
    <Layout>
      <PageHeader>Posts Management</PageHeader>
      <HomePageCart className="!pt-10 !pb-32">
        <div className="flex flex-row gap-4 text-lg">
          <div className="flex-1">
            <div className="h-full py-10 px-16 rounded-lg bg-white text-black">
              <div className="text-2xl font-semiboldtext-center">
                Posts Management
              </div>
              <Link title="Create new post" href="/create-post">
                <div
                  className="bg-neutral-500 text-neutral-100 
                  w-[150px] text-center rounded-md
                  my-5 py-1"
                >
                  Create Post
                </div>
              </Link>
              <table className="w-full dark:text-black border border-collapse">
                <thead className="bg-neutral-600 text-white">
                  <tr>
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Category</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {news_data.map((post, index) => (
                    <tr
                      key={post.id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-200" : ""
                      } border`}
                    >
                      <td className="border p-2">{post.id}</td>
                      <td className="border p-2">{post.title}</td>
                      <td className="border p-2">{post.date}</td>
                      <td className="border p-2">{post.category}</td>
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
