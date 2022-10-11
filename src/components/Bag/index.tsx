import React from "react";
import { useOutletContext } from "react-router-dom";

import { LabelCard } from "../LabelCard/";
import { Product } from "../Product/";
import { TotalDisplay } from "../TotalDisplay/";
import { RedirectButton } from "../RedirectButton/";
import { IProductsApi } from "../../types/ProductsApi";
import { CheckoutContext } from "../../types/CheckoutContext";

const url = "http://www.mocky.io/v2/5b15c4923100004a006f3c07";

export function Bag() {
  const [checkoutCtx, setCheckoutCtx] = useOutletContext<CheckoutContext>();

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: IProductsApi) => {
        setCheckoutCtx({
          products: data.items.map((item) => {
            return {
              id: item.product.sku,
              price: item.product.priceSpecification.price,
              description: item.product.name,
              img: item.product.imageObjects[0].small,
            };
          }),
          totalInfo: {
            discount: data.discount,
            shippingTotal: data.shippingTotal,
            subTotal: data.subTotal,
            total: data.total,
          },
        });
      });
  }, [url, setCheckoutCtx]);

  return (
    <>
      {checkoutCtx ? (
        <>
          <LabelCard label="produtos">
            {checkoutCtx.products.map((product) => {
              return (
                <Product
                  key={product.id}
                  id={product.id}
                  description={product.description.split("-")[0]}
                  img={product.img}
                  price={product.price}
                />
              );
            })}
          </LabelCard>
          <TotalDisplay
            subTotal={checkoutCtx.totalInfo.subTotal}
            shippingTotal={checkoutCtx.totalInfo.shippingTotal}
            discount={checkoutCtx.totalInfo.discount}
            total={checkoutCtx.totalInfo.total}
          />
          <RedirectButton label="seguir para o pagamento" path="payment" />
        </>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
}
