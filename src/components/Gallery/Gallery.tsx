import { Fragment, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AnimatePresence } from "framer-motion";
import Image from "components/Image/Image";
import Modal from "components/Modal/Modal";
import { FetchImages, GetNextPage } from "Hooks/QuerySanity";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";

function Gallery() {
  const [lastId, setlastId] = useState("");
  const images = FetchImages(lastId);

  const { t } = useTranslation();
  const [modal, setModal] = useState({
    src: "",
    alt: "",
    name: "",
    visible: false,
  });

  return (
    <Fragment>
      <div className="my-10 flex w-full flex-col">
        <h1 className="mx-auto my-3 text-4xl text-white sm:my-10  sm:text-7xl">
          {t("Gallery")}
        </h1>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <InfiniteScroll
          dataLength={images.length}
          next={() => GetNextPage(images, setlastId)}
          hasMore={true}
          loader={""}
        >
          <Masonry gutter="10px">
            {images &&
              images.map((photos) => (
                <Image
                  key={photos._id}
                  className="object-scale-down py-4 sm:px-5 "
                  imageSource={photos.imageUrl}
                  imageName={photos.name}
                  imageAlt={photos.alt}
                  imageAdress={photos.place}
                  setModalData={setModal}
                />
              ))}
          </Masonry>
        </InfiniteScroll>
      </ResponsiveMasonry>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modal.visible && <Modal modalData={modal} setModalData={setModal} />}
      </AnimatePresence>
    </Fragment>
  );
}

export default Gallery;
/*   let Query = groq`*[_type == "image_gallery"] | order(_id) [0...5]{
    _id,
    "place":city ->city,
    "imageUrl": picture.asset->url,
    "alt":picture.alt,
    "name":picture.name,
  }`; */
/*   [
    { _id: 1, imageUrl: "", name: "", alt: "", place: "" },
  ] */
