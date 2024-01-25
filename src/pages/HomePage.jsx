import graphic1 from "../assets/image/graphic1.svg";
import graphic2 from "../assets/image/graphic02.svg";
import graphic3 from "../assets/image/graphic03.svg";
import graphic4 from "../assets/image/graphic04.svg";
import phone1 from "../assets/image/phone1.png";
import phone2 from "../assets/image/phone2.png";
import phone3 from "../assets/image/phone3.png";
import aboutusimg1 from "../assets/image/aboutusimg1.png";
import peace1 from "../assets/image/peace1.jpg";
import logo from "../assets/image/logo.png";
import qrcode from "../assets/svg/qrcode.svg";
import { FaGooglePlay } from "react-icons/fa";
import play from "../assets/image/googlePlay.png";
import yoga from "../assets/image/yoga.jpg";
import yogaLogo from "../assets/image/yogaLogo.png";
import gift from "../assets/image/gift.jpg";

import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import aboutusimg2 from "../assets/image/aboutusimg2.png";
import { NavLink } from "react-router-dom";
import Chidiya from "../components/Chidiya";

const HomePage = () => {
  return (
    <div className="container px-[5%] mx-auto">
      <div className="w-full mx-auto max-w-7xl">
        <div className="py-28">
          <div className="flex flex-col items-center ">
            <Chidiya />

            {/* start section */}
            <section className="relative">
              <div className="w-full max-w-5xl mx-auto text-center">
                <h1 className="pb-6 font-sans font-semibold text-7xl text-neutral-900">
                  Transform your mental health journey with Asmi
                </h1>
                <p>
                  Truly Instant, Affordable & Anonymous - Mental Health
                  Counselling
                </p>

                <div className="flex justify-center">
                  <img className=" h-[32rem]" src={peace1} alt="" />
                </div>
              </div>
              <div className="absolute -z-10 top-[-4rem] bottom-auto right-auto left-[-8rem]">
                <img
                  className=" max-h-[17.5rem]"
                  src={graphic1}
                  alt="graphic"
                />
              </div>
              <div className="absolute top-auto bottom-1 right-[-8rem] z-10 left-auto">
                <img
                  className=" max-h-[17.5rem]"
                  src={graphic2}
                  alt="graphic"
                />
              </div>
              <div className="absolute -z-10 top-[-3rem] bottom-auto right-[-7rem] left-auto">
                <img className=" max-h-[8rem]" src={graphic3} alt="graphic" />
              </div>
              <div className="absolute -z-10 top-auto bottom-32 right-auto left-[-2.5rem]">
                <img className=" max-h-[8rem]" src={graphic4} alt="graphic" />
              </div>
            </section>
            {/*End of start section */}

            {/* Screenshot */}
            <section className="mt-40">
              <div className="flex items-center flex-rowm gap-x-8">
                <img
                  className="w-[18vw] h-full max-w-64"
                  src={phone3}
                  alt="phone"
                />
                <img
                  className="w-[25vw] h-full max-w-[21.1765rem]"
                  src={phone2}
                  alt="phone"
                />
                <img
                  className="w-[18vw] h-full max-w-64"
                  src={phone1}
                  alt="phone"
                />
              </div>
            </section>
            {/* End of Screenshot */}

            <div className="py-24 font-sans text-5xl font-semibold text-neutral-900">
              Powerful tools at your fingertips
            </div>

            {/* Asmi App */}
            <section>
              <div className="gap-x-20 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center grid">
                <div className=" w-full max-w-[35rem]">
                  <div className="text-4xl font-semibold leading-[1.2] font-sans text-neutral-900">
                    Asmi App Key Features
                  </div>

                  <ul className="pt-4 pl-6 list-disc">
                    <li className="p-2">
                      <p>
                        Quick signup. We got rid of those lengthy questions.
                      </p>
                    </li>
                    <li className="p-2">
                      <p>
                        Reveal your identity or remain anonymous, it's your
                        choice.
                      </p>
                    </li>
                    <li className="p-2">
                      <p>
                        You control the Video! You don't want to show your face
                        or see that of your Counsellor, it's your choice.
                      </p>
                    </li>
                    <li className="p-2">
                      <p>
                        Instant, as instant can be! We connect you with the
                        first available Counsellor within 60 seconds.
                      </p>
                    </li>
                    <li className="p-2">
                      <p>
                        Counselling should be accessible for everyone and that's
                        why Asmi is available in regional languages.
                      </p>
                    </li>
                    <li className="p-2">
                      <p>
                        No subscriptions. You pay per session and yes, it's
                        affordable! Also, Selfcare packs are free!
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-center w-full h-full p-4 rounded-xl bg-neutral-100">
                  <div>
                    <img className="h-40" src={logo} alt="logo" />
                  </div>
                  <div>
                    <img className="w-72" src={qrcode} alt="qr" />
                  </div>
                  <div>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.anjanajyoti.asmi"
                      target="_blank"
                    >
                      <img
                        className="h-12 mt-6 mb-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                        src={play}
                        alt="play"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* End of Asmi App */}

            {/* Free Yoga */}
            <section className="my-32">
              <div className="gap-x-20 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center grid">
                <div className="flex flex-col items-center w-full h-full p-4 rounded-xl">
                  <img
                    className="w-full h-full rounded-xl"
                    src={yoga}
                    alt="yoga"
                  />
                </div>

                <div className=" w-full max-w-[35rem]">
                  <div className="text-4xl font-semibold leading-[1.2] font-sans text-neutral-900 flex flex-col items-center">
                    <img className="items-center h-64" src={yogaLogo} alt="" />
                    <div>Get Free Yoga Sessions</div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <p className="text-center">
                      Sign Up For Free Yoga Sessions During At Multiple Times
                      During the Day!
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
              <div className="pb-2 font-sans text-4xl font-semibold text-center text-neutral-900">
                Be The Guardian Angel
              </div>

              <h1 className="w-3/4 mx-auto text-center">
                Sometimes, our loved ones, keep on suffering in silence. They
                are simply, unable to take the 'First Step' towards a happy
                life. YOU can be their Guardian Angel! Recognise and accept your
                loved one's mental health issues and give them the gift of
                happiness.
              </h1>
              <div className="mt-8 flex justify-center transition duration-300 ease-in-out  hover:translate-y-[-1px]">
                <NavLink
                  className="p-3 mx-auto font-semibold text-white border border-solid rounded-md bg-primary03 w-fit hover:bg-primary05 border-neutral-300"
                  to={"/gift-card"}
                >
                  Click Here To Gift Your Loved Ones A Mental Health Wellness
                  Session
                </NavLink>
              </div>

              <div className="w-[80%] mx-auto">
                <img src={gift} alt="counselling" />
              </div>
            </section>
            {/* End of GiftCard */}

            <section className="mx-auto mt-32 ">
              <h4 className="font-sans text-3xl font-semibold text-center text-neutral-900">
                Still have questions?
              </h4>
              <p className="py-8 text-xl">
                No worries! Mental Wellness is no longer complicated
              </p>
              <div className="flex justify-center transition duration-300 ease-in-out  hover:translate-y-[-2px]">
                <NavLink
                  className="p-3 font-semibold bg-white border border-solid rounded-md hover:bg-neutral-200 border-neutral-300 text-neutral-900 "
                  to={"/contact-us"}
                >
                  Contact Us
                </NavLink>
              </div>
            </section>

            {/* <section>
              <h1 className="text-8xl">Test here </h1>
              <button
                onClick={paymentHandler}
                className="p-3 font-semibold transition duration-300 ease-in-out bg-white border border-solid rounded-md border-neutral-300 text-neutral-900 hover:bg-neutral-200 hover:translate-y-[-2px] "
              >
                Pay
              </button>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
