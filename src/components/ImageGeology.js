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
