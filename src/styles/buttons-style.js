import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  button: {
    width: "100%",
    textAlign: "left",
    border: "1px solid rgba(255,255,255, 0.3)",
    padding: "1rem",
    color: colors.white,
    marginBottom: "1rem",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "0.3s ease-in",
    "& span": {
      padding: "0.5rem 1.5rem",
    },
    "&:hover": {
      background: colors.darkGrey,
    },
  },
  overview: ({ view, color }) => ({
    background: view === "overview" ? color : "transparent",
  }),
  structure: ({ view, color }) => ({
    background: view === "structure" ? color : "transparent",
  }),
  geology: ({ view, color }) => ({
    background: view === "geology" ? color : "transparent",
  }),
});

export default useStyles;
