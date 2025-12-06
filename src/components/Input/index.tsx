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
    <div className={css.inputWrapper}>
      <input
        {...props}
        onChange={(e) => onChange?.(e.currentTarget.value)}
        className={classNames(css.inputInput, className, {
          [css.inputError]: !!error,
        })}
      />
      {error && <p className={classNames(css.inputMessage, css.inputError)}>{error}</p>}
    </div>
  );
};

export default Input;
