import Sidebar from "../componets/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../componets/Map";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
