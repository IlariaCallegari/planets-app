// import ImgMercuryGeology from "../assets/geology-mercury.png";
// import ImgVenusGeology from "../assets/geology-venus.png";
// import ImgEarthGeology from "../assets/geology-earth.png";
// import ImgMarsGeology from "../assets/geology-mars.png";
// import ImgJupiterGeology from "../assets/geology-jupiter.png";
// import ImgSaturnGeology from "../assets/geology-saturn.png";
// import ImgUranusGeology from "../assets/geology-uranus.png";
// import ImgNeptuneGeology from "../assets/geology-neptune.png";
import useStyles from "../styles/main-style";
import classNames from "classnames";

function ImageGeology({ planetName, images }) {
  const { geologyImg, bigGeologyImg, img } = useStyles();
  return (
    <img
      src={images.geology}
      alt={`${planetName} geology`}
      className={classNames(
        img,
        planetName === "Jupiter" || planetName === "Saturn"
          ? bigGeologyImg
          : geologyImg
      )}
    />
  );
}

export default ImageGeology;
