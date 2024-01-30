import { Fragment } from "react";
import logo from "../assets/image/logo.png";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <footer className="text-white bg-primary04">
        <div className=" px-[5%]">
          <div className="w-full max-w-full mx-auto ">
            <div className="py-12 md:py-24">
              <div className=" gap-x-32 gap-y-4 text-[#fef6f6]  md:grid-cols-2 auto-cols-auto grid">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col">
                    <div className="float-left text-[#333] no-underline relative pl-0">
                      <img
                        className="inline-block w-12 h-12 max-w-full align-middle border-0 "
                        src={logo}
                        alt=""
                      />
                    </div>
                    <div className="font-sans text-3xl font-medium leading-normal ">
                      Download Asmi App now and Get Started Immediately
                    </div>
                  </div>
                  <div className="flex mt-2 gap-x-3">
                    <a className="w-8 h-8 min-h-[2rem] min-w-[2rem] gap-x-3 gap-y-3 text-white bg-[rgba(255,255,255,0.08)] justify-center items-center text-sm no-underline flex max-w-full rounded-[4rem]">
                      <div className="w-6 h-6">
                        <TiSocialLinkedin className="w-6 h-6 " />
                      </div>
                    </a>
                    <a className="w-8 h-8 min-h-[2rem] min-w-[2rem] gap-x-3 gap-y-3 text-white bg-[rgba(255,255,255,0.08)] justify-center items-center text-sm no-underline flex max-w-full rounded-[4rem]">
                      <div className="w-6 h-6">
                        <FaFacebookF className="w-5 h-5" />
                      </div>
                    </a>
                    <a className="w-8 h-8 min-h-[2rem] min-w-[2rem] gap-x-3 gap-y-3 text-white bg-[rgba(255,255,255,0.08)] justify-center items-center text-sm no-underline flex max-w-full rounded-[4rem]">
                      <div className="w-6 h-6">
                        <FaTwitter className="w-5 h-5" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="md:gap-x-8  gap-y-4 grid-rows-[auto] grid-cols-3 auto-cols-auto grid">
                  <div className="flex-col grid-rows-[auto] grid-cols-[100%] auto-cols-[100%] items-start justify-items-start flex">
                    <div className="flex-col grid-rows-[auto] grid-cols-[100%] auto-cols-[100%] items-start justify-items-start flex">
                      <div className="my-4">
                        <div className=" text-lg text-[color:var(--white)] font-semibold">
                          Pages
                        </div>
                      </div>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Home
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        About Us
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Terms of Use
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Privacy Policy
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Refund
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        FAQs
                      </a>
                    </div>
                  </div>
                  <div className="flex-col grid-rows-[auto] grid-cols-[100%] auto-cols-[100%] items-start justify-items-start flex">
                    <div className="flex-col grid-rows-[auto] grid-cols-[100%] auto-cols-[100%] items-start justify-items-start flex">
                      <div className="my-4">
                        <div className=" text-lg text-[color:var(--white)] font-semibold">
                          Socials
                        </div>
                      </div>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Facebook
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Instagram
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Twitter
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Linkedin
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Youtube
                      </a>
                    </div>
                  </div>
                  <div className="flex-col grid-rows-[auto] grid-cols-[100%] auto-cols-[100%] items-start justify-items-start flex">
                    <div className="flex-col grid-rows-[auto] grid-cols-[100%] auto-cols-[100%] items-start justify-items-start flex">
                      <div className="my-4">
                        <div className=" text-lg text-[color:var(--white)] font-semibold">
                          Careers
                        </div>
                      </div>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Psychology-Internship
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Marketing-Internship
                      </a>
                      <a className=" text-[color:var(--white-64)] text-sm no-underline py-1.5">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-px bg-[rgba(255,255,255,0.1)]"></div>

          {/*  */}
          <div className="p-8">
            <div className="flex flex-col flex-wrap gap-x-2 gap-y-2">
              <div>
                Recognised By DPIIT as a Healthtech Startup - DIPP150637
              </div>
              <div className="text-[color:var(--white-64)] text-sm mt-0">
                ©ASMI&nbsp;by Anjanajyoti Healthtech Pvt. Ltd.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
