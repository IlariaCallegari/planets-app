import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    width: "100%",
    textAlign: "left",
    background: "transparent",
    border: "1px solid rgba(255,255,255, 0.3)",
    padding: "1rem",
    color: "#fff",
    marginBottom: "1rem",
    textTransform: "uppercase",
    cursor: "pointer",
    "& span": {
      padding: "0.5rem 1.5rem",
    },
  },
});

export default useStyles;
