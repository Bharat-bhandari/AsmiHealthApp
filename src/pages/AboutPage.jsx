import { Fragment } from "react";

import aboutusimg1 from "../assets/image/aboutusimg1.png";
import aboutusimg2 from "../assets/image/aboutusimg2.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import img3 from "../assets/image/img3.png";

const AboutPage = () => {
  return (
    <Fragment>
      <section>
        <div className="px-[5%]">
          <div className="w-full max-w-screen-xl mx-auto ">
            <div className="py-40">
              <div className="gap-x-20 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center grid">
                <div className=" w-full max-w-[35rem]">
                  <div className="bg-neutral-100  rounded px-2 py-1  text-neutral-900 text-sm font-semibold leading-[1.4] inline-block">
                    Values
                  </div>
                  <div className="p-2 "></div>
                  <div
                    className="text-5xl font-semibold leading-[1.2]
  font-family: Clashdisplay variable, sans-serif text-neutral-900"
                  >
                    How it started
                  </div>
                  <div className="p-4 "></div>
                  <p className="my-0 text-lg text-neutral-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempore quos voluptas quidem, nulla dolores quia a debitis
                    quisquam reprehenderit eligendi.
                  </p>
                  <div className="p-12"></div>
                  <div className="grid gap-x-6 gap-y-6 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr]  py-2">
                    <div className="flex gap-x-6">
                      <div className="w-7 h-7 min-h-[1.75rem] min-w-[1.75rem] bg-primary04 text-white flex-col justify-center items-center flex rounded-[16rem]">
                        <div className="flex items-center justify-center flex-none w-5 h-5 ">
                          <FaCheckCircle />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-semibold text-neutral-900">
                          Safe Community
                        </div>
                        <div className="p-2"></div>
                        <p className="mt-0 mb-0 text-sm text-neutral-600">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-x-6">
                      <div className="w-7 h-7 min-h-[1.75rem] min-w-[1.75rem] bg-primary04 text-white flex-col justify-center items-center flex rounded-[16rem]">
                        <div className="flex items-center justify-center flex-none w-5 h-5 ">
                          <FaCheckCircle />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-semibold text-neutral-900">
                          Safe Community
                        </div>
                        <div className="p-2"></div>
                        <p className="mt-0 mb-0 text-sm text-neutral-600">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4"></div>
                  <div className="flex items-center justify-start gap-x-4 gap-y-4 wrap">
                    <a
                      href="/contact"
                      className="gap-x-1 text-[color:var(--neutral-900)] whitespace-nowrap justify-start items-center font-semibold no-underline transition-[color] duration-[0.2s] flex"
                    >
                      <div>Contact Us</div>
                      <div className="flex items-center justify-center flex-none w-5 h-5 ">
                        <FaArrowRightLong />
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <img
                    className="inline-block max-w-full align-middle border-0 min-h-[35rem] object-cover rounded-2xl"
                    src={aboutusimg1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <section className="text-white bg-primary04">
        <div className="px-[5%]">
          <div className="w-full max-w-screen-md mx-auto">
            <div className="py-40">
              <div className="text-center">
                <div className="w-full max-w-screen-md mx-auto">
                  <div className="text-white bg-[rgba(255,255,255,0.08)] rounded px-2 py-1 text-sm font-semibold leading-[1.4] inline-block">
                    Meet the Team
                  </div>
                  <div className="p-4 "></div>
                  <div
                    className="text-white  text-5xl font-semibold leading-[1.2];
  font-family: Clashdisplay variable, sans-serif"
                  >
                    People Behind ASMI
                  </div>
                  <div className="p-6 "></div>
                  <p className=" text-white  mt-0 mb-2.5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    earum?
                  </p>
                </div>
              </div>
              <div className="p-20"></div>
              <div>
                <div
                  className=" gap-x-8 gap-y-8 grid-rows-[auto] grid-cols-[repeat(auto-fit,minmax(23rem,23rem))] auto-cols-[1fr] justify-items-center grid
  align-items:start"
                >
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={img3}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Baki Hanma</div>
                      <div className="text-sm">BodyBuilder</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-white">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={img3}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Baki Hanma</div>
                      <div className="text-sm">BodyBuilder</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-white">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={img3}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Baki Hanma</div>
                      <div className="text-sm">BodyBuilder</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-white">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={img3}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Baki Hanma</div>
                      <div className="text-sm">BodyBuilder</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-white">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={img3}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Baki Hanma</div>
                      <div className="text-sm">BodyBuilder</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-white">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={img3}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Baki Hanma</div>
                      <div className="text-sm">BodyBuilder</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-white">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="p-24"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <div className="px-[5%]">
          <div className="w-full max-w-screen-xl mx-auto ">
            <div className="py-40">
              <div className="gap-x-20 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center grid">
                <div>
                  <img
                    className="inline-block max-w-full align-middle border-0 min-h-[35rem] object-cover rounded-2xl"
                    src={aboutusimg2}
                    alt=""
                  />
                </div>
                <div className=" w-full max-w-[35rem]">
                  <div className="bg-neutral-100  rounded px-2 py-1  text-neutral-900 text-sm font-semibold leading-[1.4] inline-block">
                    Values
                  </div>
                  <div className="p-2 "></div>
                  <div
                    className="text-5xl font-semibold leading-[1.2]
  font-family: Clashdisplay variable, sans-serif text-neutral-900"
                  >
                    Why are we doing this
                  </div>
                  <div className="p-4 "></div>
                  <p className="my-0 text-lg text-neutral-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempore quos voluptas quidem, nulla dolores quia a debitis
                    quisquam reprehenderit eligendi.
                  </p>

                  <div className="p-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutPage;
