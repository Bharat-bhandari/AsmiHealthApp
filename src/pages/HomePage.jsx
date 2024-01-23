import graphic1 from "../assets/image/graphic1.svg";
import graphic2 from "../assets/image/graphic02.svg";
import graphic3 from "../assets/image/graphic03.svg";
import graphic4 from "../assets/image/graphic04.svg";
import phone1 from "../assets/image/phone1.png";
import phone2 from "../assets/image/phone2.png";
import phone3 from "../assets/image/phone3.png";
import aboutusimg1 from "../assets/image/aboutusimg1.png";
import peace1 from "../assets/image/peace1.jpg";

import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import aboutusimg2 from "../assets/image/aboutusimg2.png";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const paymentHandler = async (event) => {
    const amount = 500;
    const currency = "INR";
    const receiptID = "qwsaq1";

    const response = await fetch("http://localhost:4000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const order = await response.json();
    console.log(order);
  };

  return (
    <div className="container px-[5%] mx-auto">
      <div className="w-full mx-auto max-w-7xl">
        <div className="py-28">
          <div className="flex flex-col items-center ">
            <section className="relative">
              <div className="w-full max-w-[60rem] mx-auto text-center">
                <h1 className="pb-6 font-sans font-semibold text-7xl text-neutral-900">
                  Transform your mental health journey
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

            <div className="py-24 font-sans text-5xl font-semibold text-neutral-900">
              Powerful tools at your fingertips
            </div>

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

                <div>
                  <img
                    className="inline-block max-w-full align-middle border-0 min-h-[35rem] object-cover rounded-2xl"
                    src={aboutusimg1}
                    alt=""
                  />
                </div>
              </div>
            </section>

            <section className="py-32 mx-auto ">
              <h4 className="font-sans text-3xl font-semibold text-center text-neutral-900">
                Still have questions?
              </h4>
              <p className="py-8 text-xl">
                No worries! Mental Wellness is no longer complicated
              </p>
              <div className="flex justify-center">
                <NavLink
                  className="p-3 font-semibold transition duration-300 ease-in-out bg-white border border-solid rounded-md border-neutral-300 text-neutral-900 hover:bg-neutral-200 hover:translate-y-[-2px] "
                  to={"/contact-us"}
                >
                  Contact Us
                </NavLink>
              </div>
            </section>

            <section>
              <h1 className="text-8xl">Test here </h1>
              <button
                onClick={paymentHandler}
                className="p-3 font-semibold transition duration-300 ease-in-out bg-white border border-solid rounded-md border-neutral-300 text-neutral-900 hover:bg-neutral-200 hover:translate-y-[-2px] "
              >
                Pay
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
