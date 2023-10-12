import AppNav from "./AppNav";
import { Outlet } from "react-router";
import Logo from "./Logo";
import s from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={s.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={s.footer}>
        <p className={s.copyright}>
          &copy; Copyright
          {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
