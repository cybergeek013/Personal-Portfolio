import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1qv8csa",
        "template_fjpdbwo",
        form.current,
        "o0ISOlr92PONM1N8K"
      )
      e.target.reset();
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 ">Wanna Collab! Send me a message</p>
        </div>
        <input
          className="bg-slate-700 p-2 rounded-md placeholder-white::placeholder text-white"
          type="text"
          placeholder="Your Name"
          name="name"
        />
        <input
          className="bg-slate-700 my-4 p-2 rounded-md text-white"
          type="email"
          placeholder="example@gmail.com"
          name="email"
        />
        <textarea
          className="bg-slate-700 p-2 rounded-md text-white"
          name="message"
          rows="10"
          placeholder="Hey ! Let's Connect..."
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md">
          Let's Collobarte
        </button>
      </div>
    </form>
  );
};
export default Contact;
