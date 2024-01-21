import React, { useRef } from "react";

import image4 from "../assets/image/image4.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_31q9wjg",
        "template_jhdlrdc",
        form.current,
        "2VTepF7X0HWluLaX0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="mx-[5%] my-12">
        <section className="flex justify-center">
          <div className="flex flex-row gap-8 rounded-xl">
            <div className="flex flex-col">
              <div className="p-2 text-xs font-semibold border border-blue-800 border-solid rounded max-w-fit">
                Contact Us
              </div>
              <div className="my-1 text-3xl font-semibold">
                We are here to Help
              </div>
              <p className="mb-1 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                dolores voluptate exercitationem minus eveniet distinctio ullam
                ipsam architecto beatae aspernatur!
              </p>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                <label className="my-4 text-gray-700">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="p-2 mb-8 text-gray-700 bg-white border border-gray-300 border-solid rounded min-h-12"
                />
                <label className="my-4 text-gray-700">Email</label>
                <input
                  type="text"
                  name="user_email"
                  className="p-2 mb-8 text-gray-700 bg-white border border-gray-300 border-solid rounded min-h-12"
                />
                <label className="my-4 text-gray-700">Message</label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Type your message.."
                  className="p-2 mb-8 text-gray-700 bg-white border border-gray-300 border-solid rounded min-h-32"
                />
                <input
                  className="p-2 text-white rounded cursor-pointer bg-primary03"
                  type="submit"
                  value="Send a Message"
                />
              </form>
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover min-w-full min-h-full"
                src={image4}
                alt="Image not found"
              />
            </div>
          </div>
        </section>
        <section className="contactinfosection"></section>
      </div>
    </>
  );
};

export default Contact;
