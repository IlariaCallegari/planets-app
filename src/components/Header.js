import Menu from "./Menu";
import { NavLink } from "react-router-dom";
import useStyles from "../styles/header-style";

function Header({ handleOverview, handleToggle }) {
  const { header, logo } = useStyles();

  return (
    <nav className={header}>
      <NavLink to="/">
        <h1 className={logo}>The Planets</h1>
      </NavLink>
      <Menu handleOverview={handleOverview} handleToggle={handleToggle} />
    </nav>
  );
}

export default Header;
