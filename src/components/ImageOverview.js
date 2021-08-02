import useStyles from "../styles/main-style";

function ImageOverview({ planetName, images }) {
  const { img } = useStyles();

  return (
    <img className={img} src={images.planet} alt={`${planetName} surface`} />
  );
}

export default ImageOverview;
