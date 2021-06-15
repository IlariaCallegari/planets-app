import ImgMercuryStructure from "../assets/planet-mercury-internal.svg";
import ImgVenusStructure from "../assets/planet-venus-internal.svg";
import ImgEarthStructure from "../assets/planet-earth-internal.svg";
import ImgMarsStructure from "../assets/planet-mars-internal.svg";
import ImgJupiterStructure from "../assets/planet-jupiter-internal.svg";
import ImgSaturnStructure from "../assets/planet-saturn-internal.svg";
import ImgUranusStructure from "../assets/planet-uranus-internal.svg";
import ImgNeptuneStructure from "../assets/planet-neptune-internal.svg";

function ImageStructure({ planetName }) {
  let myImg;

  const checkImage = () => {
    if (planetName === "Mercury") {
      myImg = ImgMercuryStructure;
    } else if (planetName === "Venus") {
      myImg = ImgVenusStructure;
    } else if (planetName === "Earth") {
      myImg = ImgEarthStructure;
    } else if (planetName === "Mars") {
      myImg = ImgMarsStructure;
    } else if (planetName === "Jupiter") {
      myImg = ImgJupiterStructure;
    } else if (planetName === "Saturn") {
      myImg = ImgSaturnStructure;
    } else if (planetName === "Uranus") {
      myImg = ImgUranusStructure;
    } else {
      myImg = ImgNeptuneStructure;
    }
    return myImg;
  };
  checkImage();

  return <img src={myImg} alt={`${planetName} internal structure`} />;
}

export default ImageStructure;