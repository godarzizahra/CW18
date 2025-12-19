import { useState } from "react";
import { Menu } from "./menu/menu";
import Reserve from "./reserve/reserve";
import { initialProducts } from "../../utils/list";

function Home() {
  const [products, setProducts] = useState(initialProducts);

  const plusProduct = (id: number) => {
    setProducts((prev) =>
      prev.map((food) =>
        food.id === id ? { ...food, count: food.count + 1 } : food
      )
    );
  };

  const minusProduct = (id: number) => {
    setProducts((prev) =>
      prev.map((food) =>
        food.id === id && food.count > 0
          ? { ...food, count: food.count - 1 }
          : food
      )
    );
  };

  return (
    <div className="bg-[#00688e] p-8 flex flex-row justify-center gap-10 w-full overflow-auto">
      <Reserve products={products} />
      <Menu
        products={products}
        plusProduct={plusProduct}
        minusProduct={minusProduct}
      />
    </div>
  );
}

export default Home;
