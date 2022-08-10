import LineItem from "components/LineItem/LineItem";
import { IoClose } from "react-icons/io5";
import useShop from "Hooks/useShop";
import OutsideClickHandler from "react-outside-click-handler";
import { CartProps } from "interfaces/Cart";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { CartAnimation } from "animations/Cart";

function Cart({ setCartOpen }: CartProps) {
  const { cart, client } = useShop();

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setCartOpen(false);
      }}
      display={"contents"}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className="absolute top-full bg-black w-full md:w-[35rem] border-2 border-orange-400 md:top-12 md:right-12 flex flex-col"
          variants={CartAnimation}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          <div className="flex justify-between px-4 pt-2">
            <p>Cart:</p>
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
                imageSrc={client.image.helpers.imageForSize(
                  items.variant.image,
                  {
                    maxWidth: 100,
                    maxHeight: 100,
                  }
                )}
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
            <p>
              Total:{" "}
              {cart && [cart.totalPriceV2.amount, " ", cart.currencyCode]}
            </p>
            <button className="p-2">Checkout</button>
          </div>
        </m.div>
      </LazyMotion>
    </OutsideClickHandler>
  );
}

export default Cart;
