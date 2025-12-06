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
      <div className={css.gal_03}>
        {images.map((img, i) => (
          <button
            key={img.thumb}
            className={css.gal_10}
            onClick={() => setIndex(i)}
          >
            <Image src={img.thumb} alt="" className={css.gal_09} />
          </button>
        ))}
      </div>

      {index !== null && (
        <div className={css.gal_04} onClick={close}>
          <div className={css.gal_05} />
          <div
            className={css.gal_06}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].original}
              alt=""
              className={css.gal_02}
            />
            <button className={css.gal_01} onClick={close}>
              <FaTimes />
            </button>
            <button className={css.gal_07} onClick={showPrev}>
              <FaAngleLeft />
            </button>
            <button className={css.gal_08} onClick={showNext}>
              <FaAngleRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
