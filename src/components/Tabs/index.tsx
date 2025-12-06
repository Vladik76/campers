import React from "react";
import {
  useMatch,
  useNavigate,
  useResolvedPath,
  type NavigateOptions,
} from "react-router";
import css from "./Tabs.module.css";

interface Tab {
  label: string;
  to: string;
  options?: NavigateOptions;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const navigate = useNavigate();

  return (
    <div className={css.tab_02}>
      {tabs.map(({ label, to, options }) => {
        const path = useResolvedPath(to);
        const match = useMatch({ path: path.pathname, end: true });
        const isActive = Boolean(match);
        return (
          <button
            key={to}
            className={`${css.tab_03} ${isActive ? css.tab_01 : ""}`}
            onClick={() => navigate(to, options)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
