import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cartProducts",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      let checkProductExisted = state.items.filter(
        (eachItem) => eachItem.id === action.payload.id
      );
      if (checkProductExisted.length === 0) {
        state.items.push(action.payload);
      }
    },
    removeItems: (state, action) => {
      state.items = state.items.filter(
        (eachItem) => eachItem.id != action.payload
      );
    },
    //this reducer to increase or
    increaseCount: (state, action) => {
      state.items = state.items.map((eachItem) => {
        if (eachItem.id === action.payload) {
          return {
            ...eachItem,
            counter: eachItem.counter + 1,
          };
        } else {
          return eachItem;
        }
      });
    },
    decreaseCount: (state, action) => {
      let currentCounterValue = state.items.filter(
        (eachItem) => eachItem.id === action.payload
      );
      if (currentCounterValue[0].counter > 1) {
        state.items = state.items.map((eachItem) => {
          if (eachItem.id === action.payload) {
            return {
              ...eachItem,
              counter: eachItem.counter - 1,
            };
          } else {
            return eachItem;
          }
        });
      }
    },
  },
});
export const { addItems, removeItems, increaseCount, decreaseCount } =
  CartSlice.actions;
export default CartSlice.reducer;
