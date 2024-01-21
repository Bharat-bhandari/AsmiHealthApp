import React, { useEffect } from "react";
import img1 from "../assets/image/img1.png";

const Blog = ({ title, summary, cover, content }) => {
  return (
    <div
    // className="flex flex-col h-full border rounded-lg border-neutral-200"

    // className="overflow-hidden border border-gray-300 rounded-md indibp_wrapper"
    >
      <a
        href="#"
        className="flex flex-col overflow-hidden hover:translate-y-[-3px] duration-300 transform transition-transform border rounded-lg h-[65vh] border-neutral-200 shadow-box"
      >
        <div className="w-full overflow-hidden h-[50%]">
          <img
            src={"http://localhost:4000/" + cover}
            alt="image not found "
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col h-[50%] p-6 justify-between">
          <div>
            <div className="flex items-center gap-4 tagger">
              <div className="px-2 py-1 text-white bg-gray-500 rounded-md indibp_category">
                {title}
              </div>
              <div className="px-2 py-1 rounded-md indibp_dur bg-antiquewhite">
                4min read
              </div>
            </div>
            <div className="mb-3 text-lg font-semibold indibp_title">
              {summary}
            </div>
            <div
              className="mb-3 text-sm indibp_content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
          <div className="mt-4 text-sm font-medium indibp_rmicon">
            Read More ..
          </div>
        </div>
      </a>
    </div>
  );
};

export default Blog;
