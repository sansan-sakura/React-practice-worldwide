import { NavLink } from "react-router-dom";
import s from "./PageNav.module.css";
import Logo from "../componets/Logo";
function PageNav() {
  return (
    <nav className={s.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={s.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
