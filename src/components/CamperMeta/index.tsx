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
    <div className={css.camperMetaMeta}>
      <span className={css.camperMetaItem}>
        <Icon name="star-pressed" className={css.camperMetaStar} />
        {rating} <span className={css.camperMetaMuted}>({reviewsCount} Reviews)</span>
      </span>
      <span className={css.camperMetaItem}>
        <Icon name="map" className={css.camperMetaIcon} />
        {location}
      </span>
    </div>
  );
};

export default CamperMeta;
