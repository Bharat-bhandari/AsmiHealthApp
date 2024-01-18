import React, { useEffect } from "react";
import img1 from "../assets/image/img1.png";

const Blog = ({ title, summary, cover, content }) => {
  return (
    <div className="container mx-auto my-8 px-[18%]">
      <div className="blogs_page">
        {/* <div className="header_block">
          <div className="mb-4 text-3xl font-semibold mainheader_title">
            Latest Blogs
          </div>
          <div className="text-base mainheader_intro">
            Dolor sit amet consectetur adipiscing elit. Praesent ut tortor diam.
            Integer eleifend aliquet efficitur nunc posuere egestas facilisis.
            Dolor sit amet consectetur adipiscing elit. Praesent ut tortor diam.
            Integer eleifend aliquet efficitur nunc posuere egestas facilisis.
          </div>
        </div> */}

        <section className="grid grid-cols-1 gap-4 blogpost_section sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {/* {[1, 2, 3, 4, 5].map((index) => ( */}
          <div
            // key={index}
            className="overflow-hidden border border-gray-300 rounded-md indibp_wrapper"
          >
            <a href="#">
              <div className="flex flex-col indibp_blog">
                <img
                  src={"http://localhost:4000/" + cover}
                  alt="image not found "
                  className="object-cover indibp_img h-35vh"
                />
                <div className="flex flex-col my-6 ml-4 mr-8 content_wrapper">
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
                  <div className="mt-4 text-sm font-medium indibp_rmicon">
                    Read More ..
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* ))} */}
        </section>
      </div>
    </div>
  );
};

export default Blog;
