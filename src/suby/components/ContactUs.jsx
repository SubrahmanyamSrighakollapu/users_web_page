import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import TopBar from "./TopBar";

const ContactUs = () => {
  return (
    <>
      <TopBar />
      <div className="mt-4 px-4 py-16 bg-[#fff7f3] font-sans">
        <div className="text-center mt-12 mb-12">
          <h2 className="text-3xl md:text-4xl text-[#f1664e] font-semibold mb-2">
            We're here for you!
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Craving something tasty or need help with your order? We’re just a
            call, click, or visit away.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          {/* Phone Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-72 text-left">
            <FaPhoneAlt className="text-3xl text-[#f1664e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">
              Have questions? Talk directly with our team.
            </p>
            <a
              href="tel:+1156156156156"
              className="text-[#f1664e] font-semibold hover:underline"
            >
              +1 156 156 156156
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-72 text-left">
            <FaEnvelope className="text-3xl text-[#f1664e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">
              Need help? Drop us a message anytime.
            </p>
            <a
              href="mailto:support@foodbite.com"
              className="text-[#f1664e] font-semibold hover:underline"
            >
              support@timelesstastes.com
            </a>
          </div>

          {/* Visit Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-72 text-left">
            <FaMapMarkerAlt className="text-3xl text-[#f1664e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-3">
              123 Food Street, Tasty Town, Andhra Pradesh
            </p>
            <a
              href="https://goo.gl/maps"
              target="_blank"
              rel="noreferrer"
              className="text-[#f1664e] font-semibold hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
