import { setCartCookies } from "Hooks/useSetCartCookies";
import useShop from "Hooks/useShop";

export function AddLineItem(variantId: string | number, quantity: number) {
  const { client, cart, updateCart } = useShop();
  const lineItemsToAdd = [{ variantId, quantity }];
  if (cart && client) {
    const checkoutId = cart.id;
    return () => {
      client.checkout
        .addLineItems(checkoutId, lineItemsToAdd)
        .then((checkout) => {
          setCartCookies(checkout);
          updateCart(checkout);
        });
    };
  }
}

export function RemoveLineItems(variantId: string | number) {
  const { client, cart, updateCart } = useShop();
  if (cart && client) {
    const checkoutId = cart.id;
    return () => {
      client.checkout
        .removeLineItems(checkoutId, variantId)
        .then((checkout) => {
          setCartCookies(checkout);
          updateCart(checkout);
        });
    };
  }
}

export function UpdateLineItems(lineItemsToUpdate:any){
  const { client, cart, updateCart } = useShop();
  if (cart && client) {
    const checkoutId = cart.id;
    return () => {
      client.checkout
        .updateLineItems(checkoutId, lineItemsToUpdate)
        .then((checkout) => {
          console.log("UPDATED");
          setCartCookies(checkout);
          updateCart(checkout);
        });
    };
  }
};
