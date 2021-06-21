import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  menu: {
    display: "flex",
    "& a": {
      textDecoration: "none !important",
      padding: "0 1.5rem 0 1.5rem",
      color: colors.white,
      transition: "0.3s ease-in",
      "& li": {
        listStyle: "none",
      },
      "&:hover": {
        fontWeight:700
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
});

export default useStyles;
