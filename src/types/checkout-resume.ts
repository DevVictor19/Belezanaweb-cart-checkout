import { IProduct } from "./cart-product";
import { ICartTotal } from "./cart-total";

export interface ICheckoutResume {
  products: IProduct[];
  totalInfo: ICartTotal;
}
