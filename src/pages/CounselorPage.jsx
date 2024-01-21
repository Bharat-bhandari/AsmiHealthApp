import React from "react";

import img1 from "../assets/image/img1.png";

const CounselorPage = () => {
  return (
    <div className="container py-[5%] mx-auto">
      <div className="w-full mx-auto max-w-7xl">
        <div className="w-full max-w-5xl mt-32">
          <div className="px-2 py-1 mb-4 border border-solid rounded-md border-neutral-900 max-w-fit">
            Counsellors
          </div>
          <h1 className="text-6xl font-semibold text-neutral-900 leading-[1.1] mb-6">
            Meet Our Counsellors
          </h1>
          <p className="mb-24">
            At Asmi's Mental Health Counselor page, our psychologists possess a
            unique blend of clinical expertise and genuine compassion. Our
            meticulous selection process ensures a team dedicated to your
            well-being in a safe and supportive environment.
          </p>
        </div>

        <div className="grid w-full grid-cols-4 gap-10 mx-auto px-[6%]">
          <div className="relative overflow-hidden rounded-md">
            <img
              src={img1}
              alt="Counselor 1"
              className="object-cover w-full overflow-hidden transition-transform duration-700 transform hover:scale-105"
            />
            <div className="absolute bottom-0 flex items-center justify-center h-[4.5rem] p-4 bg-white opacity-85 inset-x-14">
              {/* Content inside the box */}
              <div className="text-center">
                <h1 className="text-xl font-semibold">Vanitha</h1>
                <h2 className="text-sm">Psychologist</h2>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src={img1}
              alt="Counselor 1"
              className="object-cover w-full overflow-hidden transition-transform duration-700 transform hover:scale-105"
            />
            <div className="absolute bottom-0 flex items-center justify-center h-[4.5rem] p-4 bg-white opacity-85 inset-x-14">
              {/* Content inside the box */}
              <div className="text-center">
                <h1 className="text-xl font-semibold">Vanitha</h1>
                <h2 className="text-sm">Psychologist</h2>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src={img1}
              alt="Counselor 1"
              className="object-cover w-full overflow-hidden transition-transform duration-700 transform hover:scale-105"
            />
            <div className="absolute bottom-0 flex items-center justify-center h-[4.5rem] p-4 bg-white opacity-85 inset-x-14">
              {/* Content inside the box */}
              <div className="text-center">
                <h1 className="text-xl font-semibold">Vanitha</h1>
                <h2 className="text-sm">Psychologist</h2>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src={img1}
              alt="Counselor 1"
              className="object-cover w-full overflow-hidden transition-transform duration-700 transform hover:scale-105"
            />
            <div className="absolute bottom-0 flex items-center justify-center h-[4.5rem] p-4 bg-white opacity-85 inset-x-14">
              {/* Content inside the box */}
              <div className="text-center">
                <h1 className="text-xl font-semibold">Vanitha</h1>
                <h2 className="text-sm">Psychologist</h2>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src={img1}
              alt="Counselor 1"
              className="object-cover w-full overflow-hidden transition-transform duration-700 transform hover:scale-105"
            />
            <div className="absolute bottom-0 flex items-center justify-center h-[4.5rem] p-4 bg-white opacity-85 inset-x-14">
              {/* Content inside the box */}
              <div className="text-center">
                <h1 className="text-xl font-semibold">Vanitha</h1>
                <h2 className="text-sm">Psychologist</h2>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src={img1}
              alt="Counselor 1"
              className="object-cover w-full overflow-hidden transition-transform duration-700 transform hover:scale-105"
            />
            <div className="absolute bottom-0 flex items-center justify-center h-[4.5rem] p-4 bg-white opacity-85 inset-x-14">
              {/* Content inside the box */}
              <div className="text-center">
                <h1 className="text-xl font-semibold">Vanitha</h1>
                <h2 className="text-sm">Psychologist</h2>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            <img
              src={img1}
              alt="Counselor 1"
              className="object-cover w-full overflow-hidden transition-transform duration-700 transform hover:scale-105"
            />
            <div className="absolute bottom-0 flex items-center justify-center h-[4.5rem] p-4 bg-white opacity-85 inset-x-14">
              {/* Content inside the box */}
              <div className="text-center">
                <h1 className="text-xl font-semibold">Vanitha</h1>
                <h2 className="text-sm">Psychologist</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselorPage;
