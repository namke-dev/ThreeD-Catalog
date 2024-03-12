// pages/create-post.js

import Layout from "@/components/layouts/Layout";
import PostEditor from "@/components/layouts/PostEditor";
import { useState } from "react";

const CreatePost = () => {
  const [content, setContent] = useState("");

  // Implement a function to handle post submission

  return (
    <Layout className="">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="
      mt-32 
      text-xl text-neutral-800"
        >
          Create a New Post
        </h1>

        <div
          className="
      flex flex-col
      mt-6
      w-[60vw]
      h-[80vh]
       bg-neutral-100 rounded-xl px-10 py-14"
        >
          <PostEditor content={content} setContent={setContent} />
          {/* Add a button or form for submitting the post */}
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
