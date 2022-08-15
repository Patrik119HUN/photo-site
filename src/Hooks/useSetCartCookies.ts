import Cookies from "js-cookie";
import { Base64 } from "js-base64";
import { getCookieConsentValue } from "react-cookie-consent";

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
  if (getCookieConsentValue() !== "true") {
    return;
  }
  const IDs = mapItems(cart);
  try {
    Cookies.set("lineItems", JSON.stringify(IDs), {
      path: "/",
      expires: 365,
      sameSite: "lax",
      secure: false,
    });
  } catch {
    console.log("error");
  }
}
