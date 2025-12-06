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
    <label className={`${css.ft_05} ${checked ? css.ft_01 : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={css.ft_03}
        {...props}
      />
      <Icon name={icon} className={css.ft_02} />
      <span className={css.ft_04}>{label}</span>
    </label>
  );
};

export default FilterToggle;
