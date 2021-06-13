import { useState } from "react";
import getData from "../services/getData";

const useFetch = () => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = () => {
    getData()
      .then((res) => {
        setPlanets(res);
      })
      .catch((err) => console.log(err));
  };

  return [planets, setPlanets, fetchPlanets];
};

export default useFetch;
