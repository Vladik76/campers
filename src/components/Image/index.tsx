import React, { useDeferredValue, useState } from "react";
import css from "./Image.module.css";
import classNames from "classnames";
import LoaderOverlay from "../LoaderOverlay";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<ImageProps> = ({ className, ...props }) => {
  const [loading, setLoading] = useState(true);
  const hidden = useDeferredValue(loading);

  return (
    <div className={classNames(css.ima_05)}>
      {loading && (
        <LoaderOverlay className={classNames(css.ima_03, className)} />
      )}
      <img
        {...props}
        className={classNames(
          css.ima_02,
          hidden ? css.ima_01 : css.ima_04,
          className,
        )}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
    </div>
  );
};

export default Image;
