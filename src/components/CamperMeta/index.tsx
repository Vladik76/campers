import React from "react";
import css from "./CamperMeta.module.css";
import Icon from "../Icon";

interface CamperMetaProps {
  rating: number;
  reviewsCount: number;
  location: string;
}

const CamperMeta: React.FC<CamperMetaProps> = ({
  rating,
  reviewsCount,
  location,
}) => {
  return (
    <div className={css.cm_03}>
      <span className={css.cm_02}>
        <Icon name="star-pressed" className={css.cm_05} />
        {rating} <span className={css.cm_04}>({reviewsCount} Reviews)</span>
      </span>
      <span className={css.cm_02}>
        <Icon name="map" className={css.cm_01} />
        {location}
      </span>
    </div>
  );
};

export default CamperMeta;
