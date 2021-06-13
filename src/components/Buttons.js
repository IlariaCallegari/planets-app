import useStyles from "../styles/buttons-style.js";
import { Link } from "react-router-dom";

function Buttons() {
  const { button } = useStyles();
  return <a className={button}>Buttons</a>;
}

export default Buttons;
