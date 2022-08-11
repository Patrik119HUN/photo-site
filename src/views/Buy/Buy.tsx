import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Variants from "components/Variants/Variants";
import FetchByID from "Hooks/FetchByHandle";
import { Base64 } from "js-base64";
import { AddLineItem } from "store/shopify/shopifyActions";
import useShop from "Hooks/useShop";
import NoImage from "assets/No-image-found.jpg";

function Buy() {
  const { t } = useTranslation();

  let { handle } = useParams<"handle">();
  const { client, cart } = useShop();
  const { VariantData, ProductData } = FetchByID(handle, client);
  const [Variant, setVariant] = useState<any>();
  useEffect(() => {
    setVariant(VariantData[0]);
  }, [VariantData]);

  const ImageUrl = Variant?.image.src || NoImage;
  const Price = Variant?.price || 100;
  const Title = ProductData?.title || "Title";
  const currencyCode = cart?.currencyCode || "USD";

  return (
    <div className="mt-10 flex flex-col md:flex-row items-center w-full">
      <div className=" md:mx-10 w-screen md:w-1/2 ">
        <img
          className="object-cover p-5 aspect-square w-full h-full"
          src={ImageUrl}
          alt="shop-card"
        />
      </div>
      <div className="flex md:w-1/2 flex-col gap-y-3 md:gap-y-10 ">
        <p className="text-3xl md:text-6xl text-white self-center md:self-start">{Title}</p>
        <p className="text-xl md:text-3xl text-white self-center md:self-start">
          {t("Price: ")}
          {Price} {currencyCode}
        </p>
        {ProductData && (
          <Variants
            setVariant={setVariant}
            Variant={Variant}
            Variants={VariantData}
          />
        )}
        <button
          className="self-center md:self-start h-fit w-fit border-2 border-orange-400 p-5 text-center text-xl md:text-3xl text-white duration-100 ease-in hover:bg-orange-400"
          onClick={AddLineItem(Base64.encode(Variant?.id), 1)}
        >
          {t("Add_To_Cart")}
        </button>
      </div>
    </div>
  );
}

export default Buy;
