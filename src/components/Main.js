import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlanetContext } from "../contexts/PlanetContext";
function Main() {
  const { planet } = useParams();
  const { findPlanet } = useContext(PlanetContext);
  const myPlanet = findPlanet(planet);
  const { name, geology } = myPlanet;
  return (
    <div>
      <h1>{name}</h1>
      <h4>{geology.content}</h4>
    </div>
  );
}

export default Main;
