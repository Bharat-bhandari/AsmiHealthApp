import React from "react";

const GiftCard = () => {
  return (
    <>
      <div className="container px-[5%] mx-auto">
        <div className="w-full mx-auto max-w-7xl py-28">
          <section>
            <div className="gap-x-20 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] items-center grid">
              <div className="flex flex-col items-center w-full h-full p-4 rounded-xl bg-neutral-100">
                <div>
                  <img className="h-40" src="" alt="logo" />
                </div>
                <div>
                  <img className="w-72" src="" alt="qr" />
                </div>
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.anjanajyoti.asmi"
                    target="_blank"
                  >
                    <img
                      className="h-12 mt-6 mb-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                      src=""
                      alt="play"
                    />
                  </a>
                </div>
              </div>
              <div className=" w-full max-w-[35rem]">
                <div className="text-4xl font-semibold leading-[1.2] font-sans text-neutral-900">
                  Asmi App Key Features
                </div>

                <ul className="pt-4 pl-6 list-disc">
                  <li className="p-2">
                    <p>Quick signup. We got rid of those lengthy questions.</p>
                  </li>
                  <li className="p-2">
                    <p>
                      Reveal your identity or remain anonymous, it's your
                      choice.
                    </p>
                  </li>
                  <li className="p-2">
                    <p>
                      You control the Video! You don't want to show your face or
                      see that of your Counsellor, it's your choice.
                    </p>
                  </li>
                  <li className="p-2">
                    <p>
                      Instant, as instant can be! We connect you with the first
                      available Counsellor within 60 seconds.
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GiftCard;
