import { ICartTotalInfo } from "./cart-total-info";

interface IProductApi {
  quantity: number;
  product: {
    sku: string;
    name: string;
    imageObjects: [
      {
        featured: true;
        thumbnail: string;
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
        valid: boolean;
      }
    ];
    priceSpecification: {
      sku: string;
      price: number;
      originalPrice: number;
      maxPrice: number;
      percent: number;
      discount: number;
    };
  };
}

export interface IProductsApi extends ICartTotalInfo {
  id: string;
  items: IProductApi[];
}
