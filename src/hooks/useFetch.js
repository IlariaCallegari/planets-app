import { useState } from "react";
import getData from "../services/getData";

const useFetch = () => {
  const [planets, setPlanets] = useState([]);
  const [planetName, setPlanetName] = useState("Mercury")

  const fetchPlanets = () => {
    getData()
      .then((res) => {
        setPlanets(res);
      })
      .catch((err) => console.log(err));
  };

  return [planets, setPlanets, planetName, setPlanetName, fetchPlanets];
};

export default useFetch;
