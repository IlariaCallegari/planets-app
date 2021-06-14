import useStyles from "../styles/buttons-style.js";
import { Link, withRouter } from "react-router-dom";

function Buttons({ planetName }) {
  const { button, activeButton } = useStyles();
  return (
    <>
      <Link exact to={`/${planetName}`} activeClassName={activeButton}>
        <p className={button}>
          <span>01</span>
          <span>Overwiew</span>
        </p>
      </Link>
      <Link
        exact
        to={`/${planetName}/structure/${planetName}`}
        activeClassName={activeButton}
      >
        <p className={button}>
          <span>02</span>
          <span>Internal structure</span>
        </p>
      </Link>
      <Link
        exact
        to={`/${planetName}/geology/${planetName}`}
        activeClassName={activeButton}
      >
        <p className={button}>
          <span>03</span>
          <span>Surface geology</span>
        </p>
      </Link>
    </>
  );
}

export default withRouter(Buttons);
