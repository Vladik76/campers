import React from "react";
import css from "./Loading.module.css";
import classNames from "classnames";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {}

const Loading: React.FC<LoadingProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={classNames(css.loa_04, className)}>
      <span className={css.loa_02}>Loading</span>
      <div className={css.loa_01}>
        <div className={css.loa_03} />
      </div>
    </div>
  );
};

export default Loading;
