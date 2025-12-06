import React from "react";
import css from "./HeartToggle.module.css";
import Icon from "../Icon";

interface HeartToggleProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "checked" | "onChange"
  > {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const HeartToggle: React.FC<HeartToggleProps> = ({
  checked = false,
  onChange,
  ...props
}) => {
  return (
    <label className={css.ht_03}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={css.ht_02}
        {...props}
      />
      <Icon name={checked ? "heart-pressed" : "heart"} className={css.ht_01} />
    </label>
  );
};

export default HeartToggle;
