import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
  const { cities, isLoading } = useCities();
  console.log(cities, isLoading);
  if (isLoading) return <Spinner />;
  if (cities && !cities.length) return <Message message="Add your first city" />;
  return (
    <ul className={styles.cityList}>
      {cities && cities.map((city) => <CityItem city={city} key={city.id} />)}
    </ul>
  );
}

export default CityList;
