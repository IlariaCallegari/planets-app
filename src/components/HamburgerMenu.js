import { ReactComponent as Hamburger } from "../assets/icon-hamburger.svg";
import useStyles from "../styles/menu-style";

function HamburgerMenu({ handleToggle, isMobileMenuOpen }) {
  const { hamburgerMenu } = useStyles(isMobileMenuOpen);
  return (
    <Hamburger onClick={handleToggle} className={hamburgerMenu} />
  );
}

export default HamburgerMenu;
