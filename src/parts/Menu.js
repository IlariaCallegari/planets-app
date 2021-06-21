import { useContext } from "react";
import { PlanetContext } from "../contexts/PlanetContext";
import { NavLink } from "react-router-dom";
import useStyles from "../styles/menu-style";

function Menu({ handleOverview }) {
  const { planets } = useContext(PlanetContext);
  const { menu, hoverBoard } = useStyles();

  const handleClick = () => {
    handleOverview();
  };

  return (
    <ul className={menu}>
      {planets.map((planet) => {
        return (
          <NavLink to={`/${planet.name}`} key={planet.name} onClick={handleClick}>
            <li>
              <div
                className={hoverBoard}
                style={{ backgroundColor: planet.color }}
              ></div>
              {planet.name}
            </li>
          </NavLink>
        );
      })}
    </ul>
  );
}

export default Menu;
