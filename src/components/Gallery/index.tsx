import React, { useState } from "react";
import css from "./Gallery.module.css";
import type { GalleryImage } from "../../types/camper";
import Image from "../Image";
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const showPrev = () =>
    index !== null &&
    setIndex((prev) => (prev! - 1 + images.length) % images.length);
  const showNext = () =>
    index !== null && setIndex((prev) => (prev! + 1) % images.length);

  return (
    <>
      <div className={css.galleryGrid}>
        {images.map((img, i) => (
          <button
            key={img.thumb}
            className={css.galleryThumbButton}
            onClick={() => setIndex(i)}
          >
            <Image src={img.thumb} alt="" className={css.galleryThumb} />
          </button>
        ))}
      </div>

      {index !== null && (
        <div className={css.galleryModal} onClick={close}>
          <div className={css.galleryModalBackdrop} />
          <div
            className={css.galleryModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].original}
              alt=""
              className={css.galleryFullImage}
            />
            <button className={css.galleryCloseButton} onClick={close}>
              <FaTimes />
            </button>
            <button className={css.galleryNavLeft} onClick={showPrev}>
              <FaAngleLeft />
            </button>
            <button className={css.galleryNavRight} onClick={showNext}>
              <FaAngleRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
