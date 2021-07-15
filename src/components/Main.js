import React from "react";
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
import MobileButtons from "./MobileButtons";

function Main({ view, handleGeology, handleOverview, handleStructure }) {
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
    imgContainer,
    infoSide,
    info,
    content,
    planetName,
    buttons,
    geologyContainer,
  } = useStyles();

  return (
    <React.Fragment>
      <MobileButtons
        handleGeology={handleGeology}
        handleOverview={handleOverview}
        handleStructure={handleStructure}
        color={color}
        view={view}
      />
      <section className={main}>
        <div className={container}>
          <div className={imgContainer}>
            {view === "overview" && <ImageOverview planetName={name} />}
            {view === "structure" && <ImageStructure planetName={name} />}
            {view === "geology" && (
              <div className={geologyContainer}>
                <ImageOverview planetName={name} />
                <ImageGeology planetName={name} />
              </div>
            )}
          </div>
          <div className={infoSide}>
            <div className={info}>
              <h1 className={planetName}>{name}</h1>
              {view === "overview" && (
                <p className={content}>{overview.content}</p>
              )}
              {view === "structure" && (
                <p className={content}>{structure.content}</p>
              )}
              {view === "geology" && (
                <p className={content}>{geology.content}</p>
              )}
              <Source
                view={view}
                overview={overview}
                structure={structure}
                geology={geology}
              />
            </div>
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
    </React.Fragment>
  );
}

export default Main;
