import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartPaymentInfo } from "../../types/cart-payment-info";
import { ICartProduct } from "../../types/cart-product";
import { ICartTotalInfo } from "../../types/cart-total-info";

interface ICartSlice {
  products: ICartProduct[];
  totalInfo: ICartTotalInfo | null;
  paymentInfo: ICartPaymentInfo | null;
}

const initialState: ICartSlice = {
  products: [],
  totalInfo: null,
  paymentInfo: null,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ICartProduct[]>) => {
      state.products = action.payload;
    },
    addTotalInfo: (state, action: PayloadAction<ICartTotalInfo>) => {
      state.totalInfo = action.payload;
    },
    addPaymentInfo: (state, action: PayloadAction<ICartPaymentInfo>) => {
      state.paymentInfo = action.payload;
    },
  },
});

export const { addProducts, addTotalInfo, addPaymentInfo } = cartSlice.actions;

export const cartProductsReducer = cartSlice.reducer;
