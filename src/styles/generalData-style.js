import { createUseStyles } from "react-jss";
import colors from "../utils/variables";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  dataContainer: {
    marginTop: "4rem",
    paddingBottom: "4rem",
    display: "flex",
    justifyContent: "space-between",
    [sizes.down("mobileLg")]: {
      display: "block",
    },
  },
  data: {
    width: "18.5%",
    border: "1px solid rgba(255,255,255,0.2)",
    color: colors.white,
    padding: "2rem 1.5rem",
    textTransform: "uppercase",
    [sizes.down("tablet")]: {
      padding: "1rem",
    },
    [sizes.down("mobileLg")]: {
      width: "80%",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      padding: "0.5rem 1.5rem",
      margin: "1rem auto",
    },
  },
  description: {
    marginTop: 0,
    [sizes.down("tablet")]: {
      fontSize: "0.65rem",
    },
  },
  number: {
    fontSize: "1.7rem",
    fontWeight: 700,
    color: colors.white,
    marginBottom: 0,
    [sizes.down("laptopSm")]: {
      fontSize: "1.4rem",
    },
    [sizes.down("tablet")]: {
      fontSize: "1.25rem",
    },
    [sizes.down("mobileLg")]: {
      fontSize: "1rem"
    }
  },
});

export default useStyles;
