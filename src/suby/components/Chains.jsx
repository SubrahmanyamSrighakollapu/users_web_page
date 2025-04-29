import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [loading, setLoading] = useState(true);

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors?order=desc`);
      const newData = await response.json();
      setVendorData(newData);
      setLoading(false);
    } catch (error) {
      alert("Failed to fetch data");
      setLoading(true);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;

    gallery.scrollTo({
      left:
        direction === "left"
          ? gallery.scrollLeft - scrollAmount
          : gallery.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-4 py-8 bg-white">
      {loading && (
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="text-lg font-semibold">Your 🥣 is Loading...</div>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="loading"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl md:text-2xl font-bold">
          Signature Chains Defining Andhra's Culinary Scene{" "}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => handleScroll("left")}
            className="text-2xl text-gray-600 hover:text-black"
          >
            <FaRegArrowAltCircleLeft />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="text-2xl text-gray-600 hover:text-black"
          >
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>

      <section
        id="chainGallery"
        className="flex overflow-x-auto space-x-4 scroll-smooth scrollbar-hide pb-4"
      >
        {vendorData.vendors &&
          vendorData.vendors.map((vendor, idx) => (
            <React.Fragment key={idx}>
              {vendor.firm.map((item) => (
                <Link
                  key={item._id}
                  to={`/products/${item._id}/${item.firmName}`}
                  className="flex-shrink-0"
                >
                  <div className="w-36 sm:w-44 md:w-52 lg:w-60 h-36 sm:h-44 md:h-52 lg:h-60 overflow-hidden rounded-lg shadow-md bg-white">
                    <img
                      src={`${API_URL}/uploads/${item.image}`}
                      alt={item.firmName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              ))}
            </React.Fragment>
          ))}
      </section>
    </div>
  );
};

export default Chains;
