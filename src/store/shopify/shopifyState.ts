import { Client, Shop, Cart, Product } from "shopify-buy";

export default interface ShopifyState {
    client: Client | null;
    shop: Shop | null;
    cart: Cart | null;
    products: Array<Product> | null;
  }