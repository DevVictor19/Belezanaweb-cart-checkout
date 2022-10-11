import { IProduct } from "./Product";
import { ICartTotal } from "./CartTotal";

export interface ICheckoutResume {
  products: IProduct[];
  totalInfo: ICartTotal;
}
