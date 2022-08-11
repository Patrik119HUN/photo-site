import ShopifyState from "./shopifyState";

export const initialState: ShopifyState = {
  client: null,
  cart: null,
  products: null,
  shop: null,
};

export function shopifyReducer(state: ShopifyState, action) {
  const { type, payload } = action;
  switch (type) {
    case "clientCreate":
      /* console.log("clientCreate", payload); */
      return { ...state, client: payload };
    case "productsFetched":
      /* console.log("productsFetched", payload); */
      return { ...state, products: payload };
    case "checkoutCreated":
      /* console.log("checkoutCreated", payload); */
      return { ...state, cart: payload };
    case "shopInfoFetched":
      /* console.log("shopInfoFetched", payload); */
      return { ...state, shop: payload };
    case "updateCart":
      /* console.log("addToCart", payload); */
      return { ...state, cart: payload };
    case "loadCart":
      /* console.log("addToCart", payload); */
      return { ...state, cart: payload };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
}
