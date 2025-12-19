import { useState } from "react";
import Button from "../../shared/button";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  count: number;
  images: string;
};

type CardItemProps = {
  product: ProductType;
  plusProduct: (id: number) => void;
  minusProduct: (id: number) => void;
};
export default function CardItem({
  product,
  plusProduct,
  minusProduct,
}: CardItemProps) {
  return (
    <div
      key={product.id}
      className="bg-white rounded-lg flex justify-between py-4 px-4 items-end"
    >
      <div className="flex-1 justify-end text-end;">
        {product.price * product.count} تومان
      </div>
      {/* food deteail */}
      <div className="flex flex-row-reverse gap-5">
        <img src={product.images} width="70px" height="30px" />
        <div className="text-right flex flex-col gap-2">
          <div className="font-bold tex-[10px] sm:text-[15px]">
            {product.title}
          </div>
          <div className="text-[15px]">{product.price}</div>
          <div className="flex flex-row-reverse items-center gap-2">
            <Button
              className="rounded-r-[5px]"
              childern="+"
              onclick={() => plusProduct(product.id)}
            />
            <span>{product.count}</span>
            <Button
              className="rounded-l-[5px]!"
              childern="-"
              onclick={() => minusProduct(product.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
