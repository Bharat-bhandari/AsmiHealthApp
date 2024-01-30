import { Fragment } from "react";
import logo from "../assets/image/logo.png";
import qrcode from "../assets/svg/qrcode.svg";
import play from "../assets/image/googlePlay.png";

import h1w1 from "../assets/image/HowItWorks/h1w1.png";
import h1w2 from "../assets/image/HowItWorks/h1w2.png";
import h1w3 from "../assets/image/HowItWorks/h1w3.png";

import g1 from "../assets/image/graphic1.svg";
import g2 from "../assets/image/graphic02.svg";
import g3 from "../assets/image/graphic03.svg";
import g4 from "../assets/image/graphic04.svg";

import yoga from "../assets/image/yoga.jpg";
import yogaLogo from "../assets/image/yogaLogo.png";
import gift from "../assets/image/gift.jpg";

import { NavLink } from "react-router-dom";

const HowItWorks = () => {
  return (
    <Fragment>
      <div className="container px-[5%] mx-auto">
        <div className="w-full mx-auto max-w-7xl">
          <img
            className="relative hidden left-40 top-20 -z-10 md:block"
            src={g3}
            alt=""
          />
          <div>
            <div className="flex flex-row items-center md:gap-12 md:justify-end ">
              <img
                className="relative hidden md:block left-40 top-20 -z-10"
                src={g1}
                alt=""
              />
              <div>
                <div className="max-w-[30rem]  text-base">
                  <div className="mb-2 font-semibold md:text-xl">
                    Single click Signup.
                  </div>
                  <div className="mb-2 font-semibold md:text-xl">
                    When we say anonymous, we mean Anonymous!
                  </div>
                  <div className="mb-2 font-semibold md:text-xl">
                    Just give yourself a Nickname and start you journey!
                  </div>
                </div>
              </div>
              <div className="">
                <img className="w-auto h-full" src={h1w1} alt="h1w1" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end md:gap-12">
              <div className="">
                <img className=" w-[45rem] md:w-auto" src={h1w2} alt="" />
              </div>
              <div>
                <img
                  className="relative hidden left-40 -z-10 md:block"
                  src={g4}
                  alt=""
                />
                <div className="w-max-[30rem] text-base">
                  <div className="mb-2 font-semibold md:text-xl">
                    Single click Counselling{" "}
                  </div>
                  <div className="mb-2 font-semibold md:text-xl">
                    When we say instant, we mean Instant!
                  </div>
                  <div className="mb-2 font-semibold md:text-xl">
                    Just click the Instantly Connect to a Counsellor and get
                    support in less than 60 seconds!
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center md:justify-end md:gap-12">
              <img
                src={g1}
                className="relative hidden md:block left-40 top-20 -z-10"
                alt=""
              />
              <div className="max-w-[30rem] text-base">
                <div className="mb-2 font-semibold md:text-xl">
                  No Subscriptions. Not expensive.{" "}
                </div>

                <div className="mb-2 font-semibold md:text-xl">
                  When we say Affordable, we mean Affordable!
                </div>
                <div className="mb-2 font-semibold md:text-xl">
                  You pay-per-session without any monthly comitments.
                </div>
                <div className="mb-2 font-semibold md:text-xl">
                  Did we mention that the Selfcare packs are free?
                </div>
              </div>
              <div className="imgblock">
                <img className="w-auto h-full" src={h1w3} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Asmi App */}
        <section className="mb-24">
          <div className="">
            <div className="flex md:flex-row flex-col  items-center justify-center w-[70%] mx-auto h-full gap-12  py-12 px-8 rounded-xl bg-neutral-100">
              <div>
                <img className="w-72" src={qrcode} alt="qr" />
              </div>
              <div>
                <div className="font-sans text-4xl font-semibold text-center">
                  Download Now
                </div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.anjanajyoti.asmi"
                  target="_blank"
                >
                  <div className="items-center w-fit">
                    <img
                      className="h-12 mt-6 mb-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                      src={play}
                      alt="play"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End of Asmi App */}

        {/* Free Yoga */}
        <section className="my-32">
          <div className="grid items-center md:grid-cols-2 gap-x-20 gap-y-0 auto-cols-auto">
            <div className="flex flex-col items-center w-full h-full p-4 rounded-xl">
              <img className="w-full h-full rounded-xl" src={yoga} alt="yoga" />
            </div>

            <div className=" w-full max-w-[35rem]">
              <div className="text-4xl font-semibold leading-[1.2] font-sans text-neutral-900 flex flex-col items-center">
                <img
                  className="items-center hidden h-64 md:block "
                  src={yogaLogo}
                  alt=""
                />
                <div className="text-3xl text-center md:text-4xl ">
                  Get Free Yoga Sessions
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mt-4">
                <p className="text-center">
                  Sign Up For Free Yoga Sessions During At Multiple Times During
                  the Day!
                </p>
                <div className="flex mt-4 justify-center transition duration-300 ease-in-out  hover:translate-y-[-2px]">
                  <NavLink
                    className="p-3 font-semibold bg-white border border-solid rounded-md hover:bg-neutral-200 border-neutral-300 text-neutral-900 "
                    to={"/contact-us"}
                  >
                    Sign up
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Free Yoga */}

        {/* GiftCard */}
        <section>
          <div className="font-sans text-3xl font-semibold text-center md:pb-2 md:text-4xl text-neutral-900">
            Be The Guardian Angel
          </div>

          <h1 className="mx-auto text-center md:w-3/4">
            Sometimes, our loved ones, keep on suffering in silence. They are
            simply, unable to take the 'First Step' towards a happy life. YOU
            can be their Guardian Angel! Recognise and accept your loved one's
            mental health issues and give them the gift of happiness.
          </h1>
          <div className="mt-8 flex justify-center text-center transition duration-300 ease-in-out  hover:translate-y-[-1px]">
            <NavLink
              className="p-3 mx-auto font-semibold text-white border border-solid rounded-md bg-primary03 w-fit hover:bg-primary05 border-neutral-300"
              to={"/gift-card"}
            >
              Click Here To Gift Your Loved Ones A Mental Health Wellness
              Session
            </NavLink>
          </div>

          <div className="md:w-[80%]  mx-auto mb-16">
            <img src={gift} alt="counselling" />
          </div>
        </section>
        {/* End of GiftCard */}
      </div>
    </Fragment>
  );
};

export default HowItWorks;
