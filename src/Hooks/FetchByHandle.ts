import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client, Product, ProductVariant } from "shopify-buy";

export default function FetchByID(handle: string, client: Client) {
  const [VariantData, setVariantData] = useState<Array<ProductVariant>>([]);
  const [ProductData, setProductData] = useState<Product>();
  const Navigate = useNavigate();
  if (client != null && ProductData == null) {
    client.product
      .fetch(handle)
      .then((data) => (setProductData(data), setVariantData(data.variants)))
      .catch(() => Navigate("/404"));
  }

  return { VariantData, ProductData };
}
