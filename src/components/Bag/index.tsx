import React from "react";

import { LabelCard } from "../LabelCard";
import { Product } from "../Product";
import { IProduct } from "../../interfaces/Product";

const DUMMMY_PRODUCTS: IProduct[] = [
  {
    description:
      "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
    id: "24410",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
    price: 225.9,
  },
  {
    description:
      "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
    id: "24430",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
    price: 225.9,
  },
  {
    description:
      "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
    id: "244230",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
    price: 225.9,
  },
  {
    description:
      "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
    id: "14430",
    img: "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
    price: 225.9,
  },
];

export function Bag() {
  return (
    <>
      <LabelCard label="produtos">
        {DUMMMY_PRODUCTS.map((product) => {
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
    </>
  );
}
