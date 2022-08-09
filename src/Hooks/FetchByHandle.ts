import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client, Product } from "shopify-buy";

export default function FetchByID(handle: string, client: Client) {
  const [ProductData, setProductData] = useState<Product>();
  const Navigate = useNavigate();
  if (client != null && ProductData == null) {
    client.product
      .fetch(handle)
      .then((data) => setProductData(data))
      .catch(() => Navigate("/404"));
  }

  return { ProductData };
}
