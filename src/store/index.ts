import { configureStore } from "@reduxjs/toolkit";
import { cartProductsReducer } from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
