import { NavLink } from "react-router";
import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={css.navbarNavbar}>
      <div className={css.navbarLogo}>
        <NavLink to="/">
          <strong>Travel</strong>Trucks
        </NavLink>
      </div>
      <div className={css.navbarLinks}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${css.navbarLink} ${css.navbarActive}` : css.navbarLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${css.navbarLink} ${css.navbarActive}` : css.navbarLink
          }
        >
          Catalog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
