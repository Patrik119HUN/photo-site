import { Fragment, Key, useState } from "react";
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
  const [visible, setVisibility] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [ModalName, setModalName] = useState<string>("");
  const imageData = QuerySanity(Query,[{ _id: 1, imageUrl: "", name: "", alt: "", place: "" }]);
  return (
    <Fragment>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {imageData &&
            imageData.map((photos: { _id: Key | null | undefined; imageUrl: string; name: string; alt: string; place: string; }) => (
              <Image
                key={photos._id}
                className="object-scale-down py-4 sm:px-5 "
                imageSource={photos.imageUrl}
                imageName={photos.name}
                imageAlt={photos.alt}
                imageAdress={photos.place}
                ModalVisible={setVisibility}
                ModalImageSource={setImageSrc}
                ModalName={setModalName}
              />
            ))}
        </Masonry>
      </ResponsiveMasonry>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {visible && (
          <Modal
            setOpenModal={setVisibility}
            imageSource={imageSrc}
            imageAlt={"imageAlt"}
            ImageName={ModalName}
          />
        )}
      </AnimatePresence>
    </Fragment>
  );
}

export default Gallery;
