import React from "react";
import css from "./Input.module.css";
import classNames from "classnames";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  error,
  className,
  ...props
}) => {
  return (
    <div className={css.inp_04}>
      <input
        {...props}
        onChange={(e) => onChange?.(e.currentTarget.value)}
        className={classNames(css.inp_02, className, {
          [css.inp_01]: !!error,
        })}
      />
      {error && <p className={classNames(css.inp_03, css.inp_01)}>{error}</p>}
    </div>
  );
};

export default Input;
