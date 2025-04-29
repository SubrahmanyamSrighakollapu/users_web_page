import React, { useState } from "react";
import { itemData } from "../data";

const ItemsDisplay = () => {
  const [displayItem, setDisplayItem] = useState(itemData);

  return (
    <div className="flex overflow-x-auto gap-6 mt-32 px-4">
      {displayItem.map((item, index) => (
        <div
          key={index}
          className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[220px] overflow-hidden rounded-lg shadow-md"
        >
          <img
            src={item.item_img}
            alt={`Item ${index}`}
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default ItemsDisplay;
