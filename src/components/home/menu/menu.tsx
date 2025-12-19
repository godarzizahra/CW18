import CardItem, { type ProductType } from "./card-item";
import Header from "./header";

type Props = {
  products: ProductType[];
  plusProduct: (id: number) => void;
  minusProduct: (id: number) => void;
};
export function Menu({ products, plusProduct, minusProduct }: Props) {
  return (
    <div className="bg-[#00c8c4] p-[25px] rounded-2xl shadow-xl w-full sm:w-[70%] max-h-[100%] flex flex-col justify-items-start items-center gap-[50px]">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 w-full h-full px-5">
        {products.map((product) => {
          return (
            <CardItem
              product={product}
              plusProduct={plusProduct}
              minusProduct={minusProduct}
            />
          );
        })}
      </div>
    </div>
  );
}
