import Menu from "./Menu";
import useStyles from "../styles/header-style";

function Header({ handleOverview }) {
  const { header, logo } = useStyles();
  return (
    <nav className={header}>
      <h1 className={logo}>The Planets</h1>
      <Menu handleOverview={handleOverview} />
    </nav>
  );
}

export default Header;
