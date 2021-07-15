import Menu from "./Menu";
import { NavLink } from "react-router-dom";
import useStyles from "../styles/header-style";

function Header({ handleOverview, handleToggle, isMobileMenuOpen }) {
  const { header, logo } = useStyles();

  return (
    <div className={header}>
      <NavLink to="/">
        <h1 className={logo}>The Planets</h1>
      </NavLink>
      <Menu
        handleOverview={handleOverview}
        handleToggle={handleToggle}
        isMobileMenuOpen={isMobileMenuOpen}
      />
    </div>
  );
}

export default Header;
