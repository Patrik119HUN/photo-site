import ShopCard from "components/ShopCard";
import useShop from "Hooks/useShop";
import { Base64 } from "js-base64";
function Shop() {
  const { products } = useShop();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-y-0 justify-items-center mt-10">
      {products &&
        products.map((Product) => (
          <ShopCard
            key={Product.id}
            handle={Base64.encode(Product.id)}
            product={Product}
          />
        ))}
    </div>
  );
}

export default Shop;
