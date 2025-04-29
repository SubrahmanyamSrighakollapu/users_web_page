import React from "react";
import saladImage from "../assets/salad.jpg";
import TopBar from "./TopBar";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <>
      <TopBar />
      <section className="bg-[#fffdfb] py-16 px-4 flex justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center bg-[#fffaf7] rounded-3xl max-w-6xl w-full overflow-hidden p-6 md:p-12 gap-8 shadow-md">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Taste the <span className="text-[#f06644]">Freshness</span> <br />{" "}
              Delivered to Your Door
            </h2>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              We deliver freshly prepared meals made with the finest ingredients
              straight from our kitchen to your home. Whether you're craving
              comfort food, healthy options, or gourmet meals – we've got it
              all.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 text-base">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <FaCheckCircle className="text-[#00aa7e]" />
                100% Fresh Ingredients
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <FaCheckCircle className="text-[#00aa7e]" />
                Fast & Reliable Delivery
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <FaCheckCircle className="text-[#00aa7e]" />
                Trusted by Thousands
              </li>
            </ul>

            <button className="mt-6 bg-[#fc8019] hover:bg-[#e76f11] text-white font-semibold px-6 py-3 rounded-full transition duration-300">
              Explore Our Menu
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 relative flex justify-center items-center">
            <img
              src={saladImage}
              alt="Delicious Salad"
              className="w-64 md:w-96 rounded-full border-[5px] border-[#ffe2d9] shadow-lg"
            />
            <div className="absolute bottom-2 right-4 bg-[#00aa7e] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              Love at First Bite
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
