import React from "react";
import { useOutletContext } from "react-router-dom";

import { api } from "../../api/config";
import { LabelCard } from "../label-card";
import { CartProduct } from "../cart-product";
import { TotalDisplay } from "../total-display";
import { Button } from "../button";
import { IProductsApi } from "../../types/products-api";
import { CheckoutContext } from "../../types/checkout-context";
import { Spinner } from "../spinner";
import { useRedirectHandler } from "../../hooks/use-redirect";

export function CheckoutResume() {
  const [checkoutCtx, setCheckoutCtx] = useOutletContext<CheckoutContext>();
  const redirectHandler = useRedirectHandler("payment");

  React.useEffect(() => {
    api
      .get<IProductsApi>("/5b15c4923100004a006f3c07")
      .then(({ data }) => {
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
      })
      .catch((e) => console.log(e));
  }, [setCheckoutCtx]);

  return (
    <>
      {checkoutCtx ? (
        <>
          <LabelCard label="produtos">
            {checkoutCtx.products.map((product) => {
              return (
                <CartProduct
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
          <Button
            label="seguir para o pagamento"
            handleClick={redirectHandler}
          />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
