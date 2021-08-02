import useStyles from "../styles/main-style";

function ImageStructure({ planetName, images }) {
  const { img } = useStyles();
  return (
    <img
      className={img}
      src={images.internal}
      alt={`${planetName} internal structure`}
    />
  );
}

export default ImageStructure;
