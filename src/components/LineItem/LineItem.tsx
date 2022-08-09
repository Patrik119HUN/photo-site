import { IoClose } from "react-icons/io5";
import NoImage from "assets/No-image-found.jpg";
import { RemoveLineItems, UpdateLineItems } from "store/shopify/shopifyActions";
interface LineItemProps {
  imageSrc?: string;
  imageAlt?: string;
  name?: string;
  price?: number;
  size?: string;
  id: string;
  quantity: number;
  currencyCode?: string;
}

function LineItem({
  imageSrc = NoImage,
  imageAlt = "noAlt",
  name = "noName",
  price = 0,
  id,
  size,
  quantity = 1,
  currencyCode = "USD",
}: LineItemProps) {
  return (
    <div className="flex h-20 ml-5 items-center">
      <IoClose
        color="orange"
        size={30}
        onClick={RemoveLineItems(id)}
        className="cursor-pointer self-center w-5 h-5"
      />
      <img
        className="aspect-square object-cover p-5 h-full"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="flex flex-col gap-1 justify-center w-48">
        <p className="text-white text-xl leading-none text-center">{name}</p>
        <p className="text-white text-lg leading-none text-center">{size}</p>
      </div>
      <div className="flex p-2 gap-2">
        <button
          onClick={UpdateLineItems([{ id: id, quantity: quantity + 1 }])}
          className="border-2 border-orange-400 text-white text-center text-xl duration-100 ease-in hover:bg-orange-400 w-10 h-10"
        >
          +
        </button>
        <p className="text-white text-lg leading-none self-center">
          {quantity}{" "}
        </p>
        <button
          onClick={UpdateLineItems([{ id: id, quantity: quantity - 1 }])}
          className="border-2 border-orange-400 text-white text-center text-xl duration-100 ease-in hover:bg-orange-400 w-10 h-10"
        >
          -
        </button>
      </div>
      <p className="text-white text-lg leading-none">
        {price} {currencyCode}
      </p>
    </div>
  );
}

export default LineItem;
