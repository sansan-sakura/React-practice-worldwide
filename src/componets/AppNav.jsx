import s from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Counties</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
