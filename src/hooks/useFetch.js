import { useState } from "react";

const useFetch = () => {
  const [planets, setPlanets] = useState([]);
  const [planetName, setPlanetName] = useState("Mercury");

  const fetchPlanets = async () => {
    await fetch("data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response error");
        return res.json();
      })
      .then((res) => {
        setPlanets(res);
        console.log(planets);
      })
      .catch((err) => console.log(err));
  };

  return [planets, setPlanets, planetName, setPlanetName, fetchPlanets];
};

export default useFetch;
