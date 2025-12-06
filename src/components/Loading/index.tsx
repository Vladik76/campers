import React from "react";
import css from "./Loading.module.css";
import classNames from "classnames";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {}

const Loading: React.FC<LoadingProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={classNames(css.loadingWrapper, className)}>
      <span className={css.loadingLabel}>Loading</span>
      <div className={css.loadingBar}>
        <div className={css.loadingProgress} />
      </div>
    </div>
  );
};

export default Loading;
