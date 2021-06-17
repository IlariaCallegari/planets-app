import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PlanetContext } from "../contexts/PlanetContext";
import useStyles from "../styles/main-style";
import Buttons from "./Buttons";
import ImageOverview from "./ImageOverview";
import ImageStructure from "./ImageStructure";
import ImageGeology from "./ImageGeology";
import Source from "./Source";

function Main() {
  //state
  const [view, setView] = useState("overview");

  //params
  const { planet } = useParams();

  //find planet
  const { findPlanet } = useContext(PlanetContext);
  const myPlanet = findPlanet(planet);
  const { name, overview, structure, geology, color } = myPlanet;

  //styles
  const { main, img, info, content, planetName, buttons, geologyContainer } =
    useStyles();

  //methods
  const handleOverview = () => {
    setView("overview");
  };
  const handleStructure = () => {
    setView("structure");
  };
  const handleGeology = () => {
    setView("geology");
  };

  return (
    <section className={main}>
      <div className={img}>
        {view === "overview" && <ImageOverview planetName={name} />}
        {view === "structure" && <ImageStructure planetName={name} />}
        {view === "geology" && (
          <div className={geologyContainer}>
            <ImageOverview planetName={name} />
            <ImageGeology planetName={name} />
          </div>
        )}
      </div>
      <div className={info}>
        <h1 className={planetName}>{name}</h1>
        {view === "overview" && <p className={content}>{overview.content}</p>}
        {view === "structure" && <p className={content}>{structure.content}</p>}
        {view === "geology" && <p className={content}>{geology.content}</p>}
        <Source
          view={view}
          overview={overview}
          structure={structure}
          geology={geology}
        />
        <div className={buttons}>
          <Buttons
            handleStructure={handleStructure}
            handleOverview={handleOverview}
            handleGeology={handleGeology}
            view={view}
            color={color}
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
