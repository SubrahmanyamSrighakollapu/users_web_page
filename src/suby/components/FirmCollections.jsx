import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";

const FirmCollections = () => {
  const [firmData, setFirmData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [activeCategory, setActiveCategory] = useState("all");

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(newFirmData.vendors);
    } catch (error) {
      alert("firm data not fetched");
      console.error("firm data not fetched", error);
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActiveCategory(category);
  };

  return (
    <div className="px-4 py-6">
      <h3 className="text-xl sm:text-2xl font-bold mb-6">
        Your Favorite Andhra Restaurants, Now Just a Click Away!{" "}
      </h3>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-start gap-4 sm:gap-6 lg:gap-10 xl:gap-[150px] mb-6">
        {[
          { label: "All", region: "All", category: "all" },
          {
            label: "South-Indian",
            region: "South-Indian",
            category: "south-indian",
          },
          {
            label: "North-Indian",
            region: "North-Indian",
            category: "north-indian",
          },
          { label: "Chinese", region: "Chinese", category: "chinese" },
          { label: "Bakery", region: "Bakery", category: "bakery" },
        ].map(({ label, region, category }) => (
          <button
            key={label}
            onClick={() => filterHandler(region, category)}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white scale-105 shadow-lg"
                : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-pink-200 hover:to-pink-300 hover:text-white hover:translate-y-[-2px] hover:shadow-lg"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Firm Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {firmData.map((apple) =>
          apple.firm.map((item) => {
            if (
              selectedRegion === "All" ||
              item.region.includes(selectedRegion.toLowerCase())
            ) {
              return (
                <Link
                  to={`/products/${item._id}/${item.firmName}`}
                  key={item._id}
                  className="transform transition-transform duration-300 hover:scale-95"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      <img
                        src={`${API_URL}/uploads/${item.image}`}
                        alt={item.firmName}
                        className="w-full h-44 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-semibold uppercase">
                        {item.offer}
                      </div>
                    </div>
                    <div className="p-3">
                      <strong className="block text-lg">{item.firmName}</strong>
                      <div className="text-gray-500 text-sm">
                        {item.region.join(", ")}
                      </div>
                      <div className="text-gray-500 text-sm">{item.area}</div>
                    </div>
                  </div>
                </Link>
              );
            }
            return null;
          })
        )}
      </section>
    </div>
  );
};

export default FirmCollections;
