import LineItem from "components/LineItem/LineItem";
import { IoClose } from "react-icons/io5";
import useShop from "Hooks/useShop";
import OutsideClickHandler from "react-outside-click-handler";

interface CartProps {
  setCartOpen: any;
}
function Cart({ setCartOpen }: CartProps) {
  const { cart, client } = useShop();

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setCartOpen(false);
      }}
      display={"contents"}
    >
      <div className="absolute bg-black w-[35rem] border-2 border-orange-400 top-12 right-12 flex flex-col ">
        <div className="flex justify-between px-4 pt-2">
          <p className="text-white text-xl">Cart:</p>
          <IoClose
            color="orange"
            size={30}
            onClick={() => {
              setCartOpen(false);
            }}
            className="cursor-pointer"
          />
        </div>
        <div className="scroll-smooth h-52 overflow-y-auto">
          {cart?.lineItems.map((items) => (
            <LineItem
              imageSrc={client.image.helpers.imageForSize(items.variant.image, {
                maxWidth: 100,
                maxHeight: 100,
              })}
              imageAlt={items.variant.image.altText}
              name={items.title}
              price={items.variant.price}
              currencyCode={cart.currencyCode}
              size={items.variant.title}
              key={items.id}
              quantity={items.quantity}
              id={items.id}
            />
          ))}
        </div>
        <div className="flex justify-between px-4 py-2 items-center ">
          <p className="text-white text-xl">
            Total:{" "}
            {cart && [
              cart.totalPriceV2.amount,
              " ",
              cart.currencyCode,
            ]}
          </p>
          <button className="border-2 border-orange-400 text-white text-2xl p-2 duration-100 ease-in hover:bg-orange-400">
            Checkout
          </button>
        </div>
      </div>
    </OutsideClickHandler>
  );
}

export default Cart;
