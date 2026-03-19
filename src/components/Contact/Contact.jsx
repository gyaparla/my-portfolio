import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Title } from "../Utilities";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  } = import.meta.env;

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = VITE_EMAILJS_SERVICE_ID || "service_3qvu56w";
    const templateId = VITE_EMAILJS_TEMPLATE_ID || "template_qlbwmh6";
    const publicKey = VITE_EMAILJS_PUBLIC_KEY || "uzRcJdCtXiF5jo_14";

    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        "EmailJS configuration is missing. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.",
      );
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setIsSent(true);
        form.current.reset(); // Reset form fields after sending
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        setTimeout(() => setIsSent(false), 4000);
      },
      (error) => {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      },
    );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[12vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <Title
        name={"CONTACT"}
        description={
          "I’d love to hear from you -- reach out for any opportunities or questions!"
        }
      />

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSent}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSent ? "Sent" : "Shoot"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
