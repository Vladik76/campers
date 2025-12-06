import React from "react";
import css from "./Feature.module.css";
import Icon from "../Icon";
import type { IconName } from "../../types/icon-names";

interface FeatureProps {
  icon: IconName;
  label: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, label }) => {
  return (
    <button className={css.fea_01}>
      <Icon name={icon} className={css.fea_02} />
      <span className={css.fea_03}>{label}</span>
    </button>
  );
};

export default Feature;
