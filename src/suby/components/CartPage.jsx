// cartpage.jsx
import React from "react";
import TopBar from "./TopBar";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItems,
  increaseCount,
  decreaseCount,
} from "../../features/CartManagement";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartProducts.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.counter,
    0
  );

  const groupByRestaurant = (items) => {
    return items.reduce((acc, item) => {
      const restaurant = item.firmName || "Unknown Restaurant";
      if (!acc[restaurant]) {
        acc[restaurant] = [];
      }
      acc[restaurant].push(item);
      return acc;
    }, {});
  };

  const groupedItems = groupByRestaurant(cartItems);

  const handleClearCart = () => {
    cartItems.forEach((item) => dispatch(removeItems(item.id)));
    toast.success("🛒 Cart has been cleared!");
  };

  return (
    <>
      <TopBar />
      <section className="max-w-4xl mx-auto pt-30 px-4 sm:px-6 lg:px-8">
        {cartItems.length === 0 ? (
          <p className="text-center text-orange-500 font-medium text-lg mt-12">
            Oops, your cart's on a diet. Time to feed it with great picks 😕
          </p>
        ) : (
          <>
            <div className="flex flex-col gap-6">
              {Object.entries(groupedItems).map(([restaurant, items]) => (
                <div key={restaurant} className="pb-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700 border-l-4 border-orange-500 pl-2 mb-4">
                    {restaurant}
                  </h3>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 transition-transform hover:-translate-y-1"
                    >
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-800">
                          {item.productName}
                        </h4>
                        <p className="text-gray-500 text-sm mt-1">
                          Price: ₹{item.price}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold"
                            onClick={() =>
                              item.counter === 1
                                ? dispatch(removeItems(item.id))
                                : dispatch(decreaseCount(item.id))
                            }
                          >
                            −
                          </button>
                          <span className="text-sm font-medium text-gray-700 min-w-[24px] text-center">
                            {item.counter}
                          </span>
                          <button
                            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold"
                            onClick={() => dispatch(increaseCount(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 self-start sm:self-auto"
                        onClick={() => dispatch(removeItems(item.id))}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-6">
              <button
                className="bg-red-600 text-white px-5 py-2 rounded-md text-base font-semibold hover:bg-red-700"
                onClick={handleClearCart}
              >
                🗑 Clear Cart
              </button>
            </div>
          </>
        )}

        {cartItems.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-300 text-right">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Total: ₹{total}
            </h3>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-base font-bold">
              Proceed to Checkout
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default CartPage;
