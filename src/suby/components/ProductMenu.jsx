import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";
import { useDispatch } from "react-redux";
import { addItems } from "../../features/CartManagement";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);

  const { firmId, firmName } = useParams();
  const dispatch = useDispatch();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductData = await response.json();
      setProducts(newProductData.products);
    } catch (error) {
      console.error("product failed to fetch", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  return (
    <>
      <TopBar />
      <section className="mt-28 px-4 md:px-20">
        <h3 className="text-center text-2xl md:text-3xl font-semibold bg-orange-400 text-white py-3 rounded-md mb-8 shadow-md">
          {firmName}
        </h3>

        <div className="space-y-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <div className="text-center md:text-left space-y-2">
                <h4 className="text-lg font-bold text-gray-800">
                  {item.productName}
                </h4>
                <p className="text-orange-500 font-semibold text-md">
                  ₹{item.price}
                </p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>

              <div className="mt-4 md:mt-0 flex flex-col items-center">
                <img
                  src={`${API_URL}/uploads/${item.image}`}
                  alt={item.productName}
                  className="w-28 h-28 object-cover rounded-md shadow-md"
                />
                <button
                  className="mt-2 bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition-all"
                  onClick={() =>
                    dispatch(
                      addItems({ ...item, id: item._id, firmName, counter: 1 }) // include default counter
                    )
                  }
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductMenu;
