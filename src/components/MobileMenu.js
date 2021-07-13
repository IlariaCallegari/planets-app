import { useContext } from "react";
import { PlanetContext } from "../contexts/PlanetContext";
import { NavLink } from "react-router-dom";
import Chevron from "../assets/icon-chevron.svg";
import useStyles from "../styles/mobileMenu-style";

function MobileMenu({ handleClose }) {
  const { planets } = useContext(PlanetContext);
  const { mobileMenu, circle, link } = useStyles();
  return (
    <nav>
      <ul className={mobileMenu}>
        {planets.map((planet) => {
          return (
              <NavLink
                to={`/${planet.name}`}
                key={planet.name}
                onClick={handleClose}
                className={link}
              >
                <li>
                  <span
                    className={circle}
                    style={{ backgroundColor: planet.color }}
                  ></span>
                  {planet.name}
                </li>
                <img src={Chevron} alt="chevron right" />
              </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}

export default MobileMenu;
