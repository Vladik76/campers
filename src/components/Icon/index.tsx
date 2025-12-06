import React, { Suspense, useMemo } from "react";
import type { IconName } from "../../types/icon-names";
import LoaderOverlay from "../LoaderOverlay";
import css from "./Icon.module.css";
import classNames from "classnames";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

const icons = {} as Record<
  string,
  React.LazyExoticComponent<React.FC<React.SVGProps<SVGSVGElement>>>
>;

const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  const SvgIcon = useMemo(() => {
    let icon = icons[name];
    if (icon) return icon;
    icon = React.lazy(() => import(`../../assets/icons/${name}.svg?react`));
    icons[name] = icon;
    return icon;
  }, [name]);
  return (
    <div className={classNames(className, css.ico_03)}>
      <Suspense fallback={<LoaderOverlay className={css.ico_02} />}>
        <SvgIcon {...props} className={css.ico_01} />
      </Suspense>
    </div>
  );
};

export default Icon;
