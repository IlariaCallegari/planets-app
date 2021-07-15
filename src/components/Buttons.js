import React from "react"
import useStyles from "../styles/buttons-style.js";
import classNames from "classnames";

function Buttons({
  handleOverview,
  handleStructure,
  handleGeology,
  color,
  view,
}) {
  const { button, overview, structure, geology } = useStyles({view, color});
  return (
    <React.Fragment>
      <button className={classNames(button, overview)} onClick={handleOverview}>
        <span>01</span>
        <span>Overwiew</span>
      </button>
      <button
        className={classNames(button, structure)}
        onClick={handleStructure}
      >
        <span>02</span>
        <span>Internal structure</span>
      </button>
      <button className={classNames(button, geology)} onClick={handleGeology}>
        <span>03</span>
        <span>Surface geology</span>
      </button>
    </React.Fragment>
  );
}

export default Buttons;
