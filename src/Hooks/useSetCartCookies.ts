import Cookies from "js-cookie";
import { Base64 } from "js-base64";

function mapItems(cart) {
  return cart.lineItems.map((data) => ({
    variantId: Base64.encode(data.variant.id),
    quantity: data.quantity,
  }));
}

export function setCartCookies(cart) {
  if (cart == null) {
    return;
  }
  const IDs = mapItems(cart);
  try {
    console.log(IDs);
    Cookies.set("lineItems", JSON.stringify(IDs), {
        path: "/",
        expires: 365,
        sameSite: "lax",
        secure: false
    }); 
    console.log("Cookie", JSON.parse(Cookies.get("lineItems")));
  } catch {
    console.log("error");
  }
}
