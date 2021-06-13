import Menu from "./Menu";
import useStyles from "../styles/header-style";

function Header() {
  const { header, logo } = useStyles();
  return (
    <nav className={header}>
      <h1 className={logo}>The Planets</h1>
      <Menu />
    </nav>
  );
}

export default Header;
