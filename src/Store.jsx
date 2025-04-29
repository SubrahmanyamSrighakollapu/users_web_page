import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/CartManagement";
const Store = configureStore({
  reducer: {
    cartProducts: CartReducer,
  },
});
export default Store;
