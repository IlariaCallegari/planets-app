import { Link } from "react-router-dom";
import useStyles from "../styles/home-style";

function Home() {
  const { homeContainer, enterBtn } = useStyles();

  return (
    <section className={homeContainer}>
      <Link to="/Mercury" className={enterBtn}>
        Explore our Planets
        <div></div>
      </Link>
    </section>
  );
}

export default Home;
