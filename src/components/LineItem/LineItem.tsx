import { IoClose } from "react-icons/io5";
import NoImage from "assets/No-image-found.jpg";
import { RemoveLineItems, UpdateLineItems } from "store/shopify/shopifyActions";
import { LineItemProps } from "interfaces/LineItem";

function LineItem({
  imageSrc = NoImage,
  imageAlt = "noAlt",
  name = "noName",
  price = 0,
  id,
  size = "normal",
  quantity = 1,
  currencyCode = "USD",
}: LineItemProps) {
  return (
    <div className="flex h-20 ml-5 items-center">
      {/* CloseButton */}
      <IoClose
        color="orange"
        size={30}
        onClick={RemoveLineItems(id)}
        className="cursor-pointer self-center w-5 h-5"
      />
      {/* Image */}
      <img
        className="aspect-square object-cover p-5 h-full"
        src={imageSrc}
        alt={imageAlt}
      />
      {/* Name/Size */}
      <div className="flex flex-col gap-1 justify-center w-48">
        <p className="leading-none text-center">{name}</p>
        <p className="text-lg leading-none text-center">{size}</p>
      </div>
      {/* Quantity */}
      <div className="flex p-2 gap-2">
        <button
          onClick={UpdateLineItems([{ id: id, quantity: quantity + 1 }])}
          className="text-center w-10 h-10"
        >
          +
        </button>
        <p className="text-lg leading-none self-center">{quantity} </p>
        <button
          onClick={UpdateLineItems([{ id: id, quantity: quantity - 1 }])}
          className="text-center w-10 h-10"
        >
          -
        </button>
      </div>
      {/* Price */}
      <p className="text-lg leading-none">
        {price} {currencyCode}
      </p>
    </div>
  );
}

export default LineItem;
