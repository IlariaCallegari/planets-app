import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlanetContext } from "../contexts/PlanetContext";
import useStyles from "../styles/main-style";
import Buttons from "./Buttons";
import ImageOverview from "./ImageOverview";
import ImageStructure from "./ImageStructure";
import ImageGeology from "./ImageGeology";
import Source from "./Source";
import GeneralData from "./GeneralData";

function Main({
  view,
  handleGeology,
  handleOverview,
  handleStructure,
  inProp,
  setInProp,
}) {
  //params
  const { planet } = useParams();

  //find planet
  const { findPlanet } = useContext(PlanetContext);
  const myPlanet = findPlanet(planet);
  const {
    name,
    overview,
    structure,
    geology,
    color,
    rotation,
    revolution,
    radius,
    temperature,
  } = myPlanet;

  //styles
  const {
    main,
    container,
    img,
    info,
    content,
    planetName,
    buttons,
    geologyContainer,
  } = useStyles();

  return (
    <section className={main}>
      <div className={container}>
        <div className={img}>
          {view === "overview" && (
            <ImageOverview
              planetName={name}
              setInProp={setInProp}
              inProp={inProp}
            />
          )}
          {view === "structure" && <ImageStructure planetName={name} />}
          {view === "geology" && (
            <div className={geologyContainer}>
              <ImageOverview
                planetName={name}
                setInProp={setInProp}
                inProp={inProp}
              />
              <ImageGeology
                planetName={name}
                setInProp={setInProp}
                inProp={inProp}
              />
            </div>
          )}
        </div>
        <div className={info}>
          <h1 className={planetName}>{name}</h1>
          {view === "overview" && <p className={content}>{overview.content}</p>}
          {view === "structure" && (
            <p className={content}>{structure.content}</p>
          )}
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
      </div>
      <GeneralData
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </section>
  );
}

export default Main;
