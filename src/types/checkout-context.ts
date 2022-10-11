import { ICheckoutResume } from "./checkout-resume";

export type CheckoutContext = [
  ICheckoutResume | null,
  (s: ICheckoutResume) => void
];
