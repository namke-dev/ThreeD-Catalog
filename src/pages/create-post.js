import Layout from "@/components/layouts/Layout";
import PostEditor from "@/components/layouts/PostEditor";
import { useState } from "react";

const CreatePost = () => {
  const [content, setContent] = useState("");

  // Implement a function to handle post submission
  function handleSubmitPost() {
    console.log(content);
  }

  return (
    <Layout className="">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="
      mt-32 
      text-xl text-neutral-800"
        >
          Create Post
        </h1>

        <div
          className="
      flex flex-col
      mt-6
      w-[60vw]
       bg-neutral-100 rounded-xl px-10 py-20"
        >
          <PostEditor content={content} setContent={setContent} />
          <div
            className="bg-neutral-500 text-neutral-100 
                  w-[150px] text-center rounded-md
                  mt-20 py-1"
            onClick={handleSubmitPost}
          >
            Submit
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
