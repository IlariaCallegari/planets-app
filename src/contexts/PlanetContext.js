import { createContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const PlanetContext = createContext();

function PlanetProvider(props) {
  const [planets, setPlanets, fetchPlanets] = useFetch();
  
  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  const findPlanet = (param) => {
    return planets.find((planet) => planet.name === param);
  };

  return (
    <PlanetContext.Provider value={{ planets, setPlanets, findPlanet }}>
      {props.children}
    </PlanetContext.Provider>
  );
}

export { PlanetContext, PlanetProvider };
