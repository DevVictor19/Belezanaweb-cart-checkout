import { IProduct } from "./Product";
import { ICartTotal } from "./CartTotal";

export interface ICheckoutContext {
  products: IProduct[];
  totalInfo: ICartTotal;
}
