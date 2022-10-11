import { ICheckoutResume } from "./CheckoutResume";

export type CheckoutContext = [
  ICheckoutResume | null,
  (s: ICheckoutResume) => void
];
