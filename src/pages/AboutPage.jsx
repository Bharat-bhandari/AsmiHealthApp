import { Fragment } from "react";

import aboutusimg1 from "../assets/image/team/uhf.png";
import aboutusimg2 from "../assets/image/team/akm.png";
import aboutusimg3 from "../assets/image/team/mrpd.png";
import aboutusimg4 from "../assets/image/team/mspd.png";
import aboutusimg5 from "../assets/image/team/arf.png";
import aboutusimg6 from "../assets/image/team/tghr.png";
import aboutusimg7 from "../assets/image/team/sgp.png";
import aboutusimg8 from "../assets/image/team/skp.png";
import aboutusimg9 from "../assets/image/team/fgp.png";
import aboutusimg10 from "../assets/image/team/skp2.png";

import auimage1 from "../assets/image/aboutusimg1.png";
import auimage2 from "../assets/image/aboutusimg2.png";

import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

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
                    src={auimage1}
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
                          src={aboutusimg1}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Ujjwal Handa</div>
                      <div className="text-sm">Founder</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-sm text-white">
                        I bring a passion for innovation and a strategic mindset
                        to drive the companys success.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={aboutusimg2}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Arvinder Kaur</div>
                      <div className="text-sm">Marketing</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-sm text-white">
                        I specialize in driving online presence and brand
                        visibility to new heights.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={aboutusimg3}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Md. Riswan</div>
                      <div className="text-sm">Product Development</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-sm text-white">
                        As a skilled Front-end Flutter Developer, I specialize
                        in creating visually appealing and responsive user
                        interfaces for mobile applications.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={aboutusimg4}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Md. Safvan</div>
                      <div className="text-sm">Product Development</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-sm text-white">
                        As an adept Python Django Developer, I specialize in
                        crafting robust and scalable web applications.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={aboutusimg5}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Ayushi Rana</div>
                      <div className="text-sm">Finance</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-sm text-white">
                        I specialize in ensuring financial excellence and
                        stability within organizations.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={aboutusimg6}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Tanvi Gupta</div>
                      <div className="text-sm">Human Rescource</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-sm text-white">
                        I specialize in identifying and nurturing exceptional
                        talent to create vibrant workplace environments.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={aboutusimg7}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">
                        Shraddha Gupta
                      </div>
                      <div className="text-sm">Psychologist</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-sm text-white">
                        My personal way to healing others is very holistic, warm
                        and flexible.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={aboutusimg8}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">Saloni Karwa</div>
                      <div className="text-sm">Psychologist</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-sm text-white">
                        I am a dedicated and compassionate psychologist with a
                        masters degree in clinical psychology.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={aboutusimg9}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">
                        Shivangi Kapoor
                      </div>
                      <div className="text-sm">Psychologist</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-sm text-white">
                        Counselling psychologist with a Masters in Clinical
                        Psychology and 2 years of experience in aiding
                        management of Mood disorders, Personality disorders,
                        Relationship/ Family Issues, Workplace/ Academic Stress
                        Management and General Stress.
                      </p>
                      <div className="p-4 "></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-8 rounded-lg bg-darkSlateGrey">
                    <div>
                      <div>
                        <img
                          className=" w-20 h-20 min-h-[5rem] min-w-[5rem] object-cover rounded-[100%] max-w-full inline-block"
                          src={aboutusimg10}
                          alt=""
                        />
                      </div>
                      <div className="p-4 "></div>
                      <div className="text-xl font-semibold">
                        Felicia Gangmei
                      </div>
                      <div className="text-sm">Psychologist</div>
                      <div className="p-4 "></div>
                      <p className="mt-0 mb-0 text-sm text-white">
                        I am a dedicated Counselling Psychologist committed to
                        supporting individuals on their journey towards
                        emotional well-being and personal growth.
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
                    src={auimage2}
                    alt=""
                  />
                </div>
                <div className=" w-full max-w-[35rem]">
                  <div className="bg-neutral-100  rounded px-2 py-1  text-neutral-900 text-sm font-semibold leading-[1.4] inline-block">
                    Values
                  </div>
                  <div className="p-2 "></div>
                  <div className="text-5xl font-semibold leading-[1.2] text-neutral-900">
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
