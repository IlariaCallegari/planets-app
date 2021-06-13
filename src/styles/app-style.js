import { createUseStyles } from "react-jss";
import backgroundStars from "../assets/background-stars.svg";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  app: {
    height: "100vh",
    backgroundColor: colors.darkBlue,
    backgroundImage: `url(${backgroundStars})`,
    color: colors.white,
  },
});

export default useStyles;
