import ImgMercury from "../assets/planet-mercury.svg";
import ImgVenus from "../assets/planet-venus.svg";
import ImgEarth from "../assets/planet-earth.svg";
import ImgMars from "../assets/planet-mars.svg";
import ImgJupiter from "../assets/planet-jupiter.svg";
import ImgSaturn from "../assets/planet-saturn.svg";
import ImgUranus from "../assets/planet-uranus.svg";
import ImgNeptune from "../assets/planet-neptune.svg";

let myImg;
const checkImage = (planetName) => {
  if (planetName === "Mercury") {
    myImg = ImgMercury;
  } else if (planetName === "Venus") {
    myImg = ImgVenus;
  } else if (planetName === "Earth") {
    myImg = ImgEarth;
  } else if (planetName === "Mars") {
    myImg = ImgMars;
  } else if (planetName === "Jupiter") {
    myImg = ImgJupiter;
  } else if (planetName === "Saturn") {
    myImg = ImgSaturn;
  } else if (planetName === "Uranus") {
    myImg = ImgUranus;
  } else {
    myImg = ImgNeptune;
  }
  return myImg;
};
function ImageOverview({ planetName }) {
  checkImage(planetName);

  return <img src={myImg} alt={`${planetName} surface`} />;
}

export default ImageOverview;
