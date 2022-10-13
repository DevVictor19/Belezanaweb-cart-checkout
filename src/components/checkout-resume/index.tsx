import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { IProductsApi } from "../../types/products-api";
import { ICartProduct } from "../../types/cart-product";
import { ICartTotalInfo } from "../../types/cart-total-info";

import { addProducts, addTotalInfo } from "../../store/slices/cart-slice";
import { api } from "../../api/config";
import { LabelCard } from "../label-card";
import { CartProduct } from "../cart-product";
import { TotalDisplay } from "../total-display";
import { Button } from "../button";
import { Spinner } from "../spinner";

export function CheckoutResume() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products: ICartProduct[] = useSelector(
    (state: RootState) => state.cart.products
  );

  const totalInfo: ICartTotalInfo | null = useSelector(
    (state: RootState) => state.cart.totalInfo
  );

  React.useEffect(() => {
    api
      .get<IProductsApi>("/5b15c4923100004a006f3c07")
      .then(({ data }) => {
        const newProducts: ICartProduct[] = data.items.map((item) => ({
          id: item.product.sku,
          price: item.product.priceSpecification.price,
          description: item.product.name,
          img: item.product.imageObjects[0].small,
        }));

        const totalInfo: ICartTotalInfo = {
          total: data.total,
          discount: data.discount,
          subTotal: data.subTotal,
          shippingTotal: data.shippingTotal,
        };

        dispatch(addProducts(newProducts));
        dispatch(addTotalInfo(totalInfo));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {products.length > 0 && totalInfo ? (
        <>
          <LabelCard label="produtos">
            {products.map((product) => {
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
            discount={totalInfo.discount}
            total={totalInfo.total}
            subTotal={totalInfo.subTotal}
            shippingTotal={totalInfo.shippingTotal}
          />
          <Button
            label="seguir para o pagamento"
            handleClick={(_) => navigate("payment")}
          />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
