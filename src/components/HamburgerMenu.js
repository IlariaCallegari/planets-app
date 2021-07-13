import Hamburger from "../assets/icon-hamburger.svg";
import useStyles from "../styles/menu-style";

function HamburgerMenu({handleToggle}) {
    const {hamburgerMenu} = useStyles();
  return (
    <img
      className={hamburgerMenu}
      src={Hamburger}
      alt="hamburger menu icon"
      onClick={handleToggle}
    />
  );
}

export default HamburgerMenu;
