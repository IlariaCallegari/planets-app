import ImgMercuryGeology from "../assets/geology-mercury.png";
import ImgVenusGeology from "../assets/geology-venus.png";
import ImgEarthGeology from "../assets/geology-earth.png";
import ImgMarsGeology from "../assets/geology-mars.png";
import ImgJupiterGeology from "../assets/geology-jupiter.png";
import ImgSaturnGeology from "../assets/geology-saturn.png";
import ImgUranusGeology from "../assets/geology-uranus.png";
import ImgNeptuneGeology from "../assets/geology-neptune.png";
import useStyles from "../styles/main-style";

function ImageGeology({ planetName }) {
  const { geologyImg, bigGeologyImg } = useStyles();
  let myImg;
  const checkImage = () => {
    if (planetName === "Mercury") {
      myImg = ImgMercuryGeology;
    } else if (planetName === "Venus") {
      myImg = ImgVenusGeology;
    } else if (planetName === "Earth") {
      myImg = ImgEarthGeology;
    } else if (planetName === "Mars") {
      myImg = ImgMarsGeology;
    } else if (planetName === "Jupiter") {
      myImg = ImgJupiterGeology;
    } else if (planetName === "Saturn") {
      myImg = ImgSaturnGeology;
    } else if (planetName === "Uranus") {
      myImg = ImgUranusGeology;
    } else {
      myImg = ImgNeptuneGeology;
    }
    return myImg;
  };
  checkImage();

  return (
    <img
      src={myImg}
      alt={`${planetName} geology`}
      className={
        planetName === "Jupiter" || planetName === "Saturn"
          ? bigGeologyImg
          : geologyImg
      }
    />
  );
}

export default ImageGeology;
