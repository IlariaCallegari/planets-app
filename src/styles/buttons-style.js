import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    border: "1px solid rgba(255,255,255, 0.3)",
    padding: "1rem",
    color: "#fff",
    textTransform: "uppercase",
    "& span": {
      padding: "0.5rem 1.5rem",
    },
  },
  activeClassName: {
    backgroundColor: "red"
  },
});

export default useStyles;
