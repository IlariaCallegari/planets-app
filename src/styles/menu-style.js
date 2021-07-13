import { createUseStyles } from "react-jss";
import colors from "../utils/variables";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  menu: {
    display: "flex",
    [sizes.down("tablet")]: {
      justifyContent: "center",
      paddingLeft: 0,
    },
    [sizes.down("mobileLg")]: {
      display: "none",
    },
    "& a": {
      textDecoration: "none !important",
      padding: "0 1.5rem 0 1.5rem",
      color: colors.white,
      transition: "0.3s ease-in",
      [sizes.down("laptopSm")]: {
        padding: "0 0 0 1rem",
        "&:first-child": {
          padding: 0,
        },
      },
      "& li": {
        listStyle: "none",
      },
      "&:hover": {
        fontWeight: 700,
      },
      "&:hover div": {
        opacity: 1,
        width: "100%",
        transition: "all 0.3s ease-in",
      },
    },
  },
  hoverBoard: {
    height: "0.2rem",
    width: 0,
    marginBottom: "1rem",
    opacity: 0,
  },
  hamburgerMenu: {
    [sizes.up("mobileLg")]: {
      display: "none",
    },
  },
});

export default useStyles;
