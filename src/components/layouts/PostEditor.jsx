// components/PostEditor.js

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import the styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const PostEditor = ({ content, setContent }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={content}
      onChange={setContent}
      placeholder="Write your post here..."
    />
  );
};

export default PostEditor;
