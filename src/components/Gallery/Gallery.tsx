import { Fragment, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AnimatePresence } from "framer-motion";
import Image from "components/Image/Image";
import Modal from "components/Modal/Modal";
import QuerySanity from "Hooks/QuerySanity";
let Query = `*[_type == "image_gallery"]{
    _id,
    "place":city ->city,
    "imageUrl": picture.asset->url,
    "alt":picture.alt,
    "name":picture.name,
  }`;

function Gallery() {
  const [modal, setModal] = useState({
    src: "",
    alt: "",
    name: "",
    visible: false,
  });

  const imageData = QuerySanity(Query, [
    { _id: 1, imageUrl: "", name: "", alt: "", place: "" },
  ]);
  return (
    <Fragment>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {imageData &&
            imageData.map((photos) => (
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
