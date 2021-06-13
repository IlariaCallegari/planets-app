import { useContext } from "react";
import { PlanetContext } from "../contexts/PlanetContext";
import { Link } from "react-router-dom";
import useStyles from "../styles/menu-style";

function Menu() {
  const { planets } = useContext(PlanetContext);
  const {menu} = useStyles();
  return (
    <ul className={menu}>
      {planets.map((planet) => {
        return (
          <Link to={`/${planet.name}`} key={planet.name}>
            <li>{planet.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Menu;
