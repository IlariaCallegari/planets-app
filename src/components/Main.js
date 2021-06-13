import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlanetContext } from "../contexts/PlanetContext";
import useStyles from "../styles/main-style";
import Buttons from "./Buttons";
import Image from "./Image";

function Main() {
  const { planet } = useParams();
  const { findPlanet } = useContext(PlanetContext);
  const { main, img, info, content, planetName, sourceLink } = useStyles();
  const myPlanet = findPlanet(planet);
  const { name, overview } = myPlanet;
  return (
    <section className={main}>
      <div className={img}>
        <Image planetName={name} />
      </div>
      <div className={info}>
        <h1 className={planetName}>{name}</h1>
        <p className={content}>{overview.content}</p>
        <a href={`${overview.source}`} className={sourceLink}>
          Source: <span>Wikipedia</span>
        </a>
        <div>
          <Buttons />
        </div>
      </div>
    </section>
  );
}

export default Main;
