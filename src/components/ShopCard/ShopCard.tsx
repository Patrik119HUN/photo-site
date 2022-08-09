import { Link } from "react-router-dom";

interface ShopCardProps {
  product: any;
  handle:string;
}

function ShopCard({ product,handle }: ShopCardProps) {
  return (
    <div className="mx-2 my-5 flex h-96 w-72 flex-col transition-transform duration-100 ease-in hover:-translate-y-10">
      <Link to={handle} replace={true}>
        <img
          className="aspect-square w-full cursor-pointer object-cover"
          src={product.images[0].src}
          alt={product.title}
        />
      </Link>
      <div className="mt-2 flex flex-col">
        <p className="text-center text-3xl text-white">{product.title}</p>
        <p className="text-center text-2xl text-white">
          {product.variants[0].priceV2.amount}{" "}{product.variants[0].priceV2.currencyCode}
        </p>
      </div>
    </div>
  );
}

export default ShopCard;
