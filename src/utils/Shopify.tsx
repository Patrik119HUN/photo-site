import { useEffect, useReducer } from "react";
import { createContext } from "react";
import Client from "shopify-buy";
import Cookies from "js-cookie";
import { shopifyReducer, initialState } from "store/shopify/shopifyReducer";
import { getCookieConsentValue } from "react-cookie-consent";
export const ShopifyContext = createContext(undefined);

interface ShopifyProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function ShopifyProvider({ children }: ShopifyProviderProps) {
  const [state, dispatch] = useReducer(shopifyReducer, initialState);

  useEffect(() => {
    async function bootstrapShopify(): Promise<void> {
      try {
        // client
        const client = Client.buildClient({
          storefrontAccessToken: process.env.REACT_APP_STOREFRONT_KEY,
          domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
        });
        dispatch({ type: "clientCreate", payload: client });

        // products
        const products = await client.product.fetchAll();
        dispatch({ type: "productsFetched", payload: products });

        // cart
        const cart = await client.checkout.create();
        dispatch({ type: "checkoutCreated", payload: cart });

        // shop
        const shop = await client.shop.fetchInfo();
        dispatch({ type: "shopInfoFetched", payload: shop });

        //loadCart
        if (getCookieConsentValue() === "true") {
          const loadCart = await client.checkout.addLineItems(
            cart.id,
            JSON.parse(Cookies.get("lineItems"))
          );
          dispatch({ type: "loadCart", payload: loadCart });
        }
        // catch any errors thrown in bootstrapping process
      } catch (error) {
        // TODO: real error handling here, perhaps to real logs or do something else entirely
        console.log(error);
      }
    }
    bootstrapShopify();
  }, []);

  const updateCart = (products) => {
    dispatch({ type: "updateCart", payload: products });
  };

  const value = {
    client: state.client,
    products: state.products,
    cart: state.cart,
    shop: state.shop,
    updateCart,
  };
  return (
    <ShopifyContext.Provider value={value}>{children}</ShopifyContext.Provider>
  );
}
