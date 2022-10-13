import { ICartProduct } from "./cart-product";
import { ICartTotal } from "./cart-total-info";

export interface ICheckoutResume {
  products: ICartProduct[];
  totalInfo: ICartTotal;
}
