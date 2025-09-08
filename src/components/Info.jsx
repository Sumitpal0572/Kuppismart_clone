import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Info = () => {
  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Box - Form */}
        <div className="bg-green-300 w-full md:w-2/3 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Get In Touch with us
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Box - Contact Info */}
        <div className="bg-green-300 w-full md:w-1/3 rounded-xl shadow-md p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Contact Details
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">Address:</p>
                <p>123 Poultry Street, Hyderabad, India</p>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>+91 9876543210</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>support@kuppismart.com</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 text-center">
            <p className="font-semibold text-gray-800 mb-4">Follow us on</p>
            <div className="flex justify-center gap-6 text-2xl text-gray-700">
              <a href="#" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-700">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-pink-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
