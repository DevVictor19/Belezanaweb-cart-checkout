import { ICartProduct } from "./cart-product";
import { ICartTotal } from "./cart-total";

export interface ICheckoutResume {
  products: ICartProduct[];
  totalInfo: ICartTotal;
}
