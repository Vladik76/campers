import React from "react";
import css from "./FilterToggle.module.css";
import type { IconName } from "../../types/icon-names";
import Icon from "../Icon";

interface FilterToggleProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "checked" | "onChange"
  > {
  icon: IconName;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const FilterToggle: React.FC<FilterToggleProps> = ({
  icon,
  label,
  checked,
  onChange,
  ...props
}) => {
  return (
    <label className={`${css.filterToggleToggle} ${checked ? css.filterToggleChecked : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={css.filterToggleInput}
        {...props}
      />
      <Icon name={icon} className={css.filterToggleIcon} />
      <span className={css.filterToggleLabel}>{label}</span>
    </label>
  );
};

export default FilterToggle;
