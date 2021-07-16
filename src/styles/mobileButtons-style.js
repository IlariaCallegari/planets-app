import { createUseStyles } from "react-jss";
import sizes from "../utils/breakpoints";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  mobileButtons: {
    width: "100%",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    justifyContent: "space-around",
    [sizes.up("mobileLg")]: {
      display: "none",
    },
  },
  buttonContainer: (color) => ({
    "&:hover div": {
      width: "100%",
      background: color,
      opacity: 1,
      transition: "all 0.3s ease-in",
    },
  }),
  button: {
    width: "33.3333%",
    backgroundColor: "transparent",
    color: colors.lightGrey,
    textTransform: "uppercase",
    padding: "1.25rem 0",
    border: "none",
    transition: "all 0.3s ease-in",
    "&:hover": {
      color: colors.white,
    },
  },
  hoverLine: {
    width: 0,
    height: "4px",
    opacity: 0,
  },
  overview: ({ view, color }) => ({
    "& button": {
      color: view === "overview" ? colors.white : colors.lightGrey,
    },
    "& div": {
      width: "100%",
      opacity: 1,
      background: view === "overview" ? color : "transparent",
    },
  }),
  structure: ({ view, color }) => ({
    "& button": {
      color: view === "structure" ? colors.white : colors.lightGrey,
    },
    "& div": {
      background: view === "structure" ? color : "transparent",
      width: "100%",
      opacity: 1,
    },
  }),
  geology: ({ view, color }) => ({
    "& button": {
      color: view === "geology" ? colors.white : colors.lightGrey,
    },
    "& div": {
      background: view === "geology" ? color : "transparent",
      width: "100%",
      opacity: 1,
    },
  }),
});

export default useStyles;
