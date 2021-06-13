import Menu from "./Menu";
import useStyles from "../styles/header-style";

function Header() {
  const { header } = useStyles();
  return (
    <nav className={header}>
      <h1>The Planets</h1>
      <Menu />
    </nav>
  );
}

export default Header;
