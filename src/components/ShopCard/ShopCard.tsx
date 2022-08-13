import { ShopCardProps } from "interfaces/ShopCard";
import { Link } from "react-router-dom";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { ShopCardAnimation } from "animations/ShopCard";

function ShopCard({ product, handle, client }: ShopCardProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="mx-2 my-5 flex h-96 w-72 flex-col "
        variants={ShopCardAnimation}
        initial={"load"}
        whileInView={"loaded"}
        whileHover={"hover"}
        whileTap={"tap"}
        viewport={{ once: true }}
      >
        <Link to={handle} replace={true}>
          <img
            className="aspect-square w-full cursor-pointer object-cover"
            src={client.image.helpers.imageForSize(product.images[0], {
              maxWidth: 500,
              maxHeight: 500,
            })}
            alt={product.title}
          />
        </Link>
        <div className="mt-2 flex flex-col">
          <p className="text-center text-3xl">{product.title}</p>
          <p className="text-center text-2xl">
            {product.variants[0].priceV2.amount}{" "}
            {product.variants[0].priceV2.currencyCode}
          </p>
        </div>
      </m.div>
    </LazyMotion>
  );
}

export default ShopCard;
