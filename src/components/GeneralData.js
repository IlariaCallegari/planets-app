import useStyles from "../styles/generalData-style";

function GeneralData({ rotation, revolution, radius, temperature }) {
  const { dataContainer, data, number, description } = useStyles();
  return (
    <div className={dataContainer}>
      <div className={data}>
        <p className={description}>Rotation Time</p>
        <p className={number}>{rotation}</p>
      </div>
      <div className={data}>
        <p className={description}>Revolution Time</p>
        <p className={number}>{revolution}</p>
      </div>
      <div className={data}>
        <p className={description}>Radius</p>
        <p className={number}>{radius}</p>
      </div>
      <div className={data}>
        <p className={description}>Average Temp</p>
        <p className={number}>{temperature}</p>
      </div>
    </div>
  );
}

export default GeneralData;
