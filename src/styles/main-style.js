import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    paddingTop: "5rem"

  },
  img: {
    width: "65%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    width: "35%",
  },
  planetName: {
    textTransform: "uppercase",
    fontSize: "5rem",
    letterSpacing: "1.2rem"
  },
  sourceLink: {
    color: "rgba(255,255,255,0.6)",
    "& span": {
      textDecoration: "underline"
    }
  }
});

export default useStyles;
