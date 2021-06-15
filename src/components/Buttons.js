import useStyles from "../styles/buttons-style.js";

function Buttons({ handleOverview, handleStructure, handleGeology }) {
  const { button } = useStyles();
  return (
    <>
      <button className={button} onClick={handleOverview}>
        <span>01</span>
        <span>Overwiew</span>
      </button>
      <button className={button} onClick={handleStructure}>
        <span>02</span>
        <span>Internal structure</span>
      </button>
      <button className={button} onClick={handleGeology}>
        <span>03</span>
        <span>Surface geology</span>
      </button>
    </>
  );
}

export default Buttons;
