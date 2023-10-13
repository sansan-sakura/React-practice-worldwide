import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
const BASE_URL = " http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities/`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Something wrong with fetching");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("Something wrong with fetching");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={(cities, isLoading, currentCity, getCity)}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesProvider);
  if (context === undefined) throw new Error(" CitiesContext was defined outside");
  return context;
}

export { CitiesProvider, useCities };
