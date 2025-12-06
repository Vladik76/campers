import { NavLink } from "react-router";
import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={css.nav_05}>
      <div className={css.nav_04}>
        <NavLink to="/">
          <strong>Travel</strong>Trucks
        </NavLink>
      </div>
      <div className={css.nav_03}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${css.nav_02} ${css.nav_01}` : css.nav_02
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${css.nav_02} ${css.nav_01}` : css.nav_02
          }
        >
          Catalog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
