import { Link } from "react-router-dom";
import useStyles from "../styles/home-style";

function Home() {
  const { homeContainer, enterBtn, logo} = useStyles();

  return (
    <section className={homeContainer}>
      <h1 className={logo}>The Planets</h1>
      <Link to="/Mercury" className={enterBtn}>
        Explore our Planets
        <div></div>
      </Link>
    </section>
  );
}

export default Home;
