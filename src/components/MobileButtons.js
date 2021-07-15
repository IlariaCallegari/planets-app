import classNames from "classnames";
import useStyles from "../styles/mobileButtons-style";

function MobileButtons({
  handleOverview,
  handleStructure,
  handleGeology,
  color,
  view,
}) {
  const {
    mobileButtons,
    buttonContainer,
    button,
    hoverLine,
    overview,
    structure,
    geology,
  } = useStyles({color, view});
  return (
    <div className={mobileButtons}>
      <div className={classNames(buttonContainer, overview)}>
        <button className={button} onClick={handleOverview}>
          Overview
        </button>
        <div className={hoverLine}></div>
      </div>
      <div className={classNames(structure, buttonContainer)}>
        <button className={button} onClick={handleStructure}>
          Structure
        </button>
        <div className={hoverLine}></div>
      </div>
      <div className={classNames(geology, buttonContainer)}>
        <button className={button} onClick={handleGeology}>
          Geology
        </button>
        <div className={hoverLine}></div>
      </div>
    </div>
  );
}

export default MobileButtons;
