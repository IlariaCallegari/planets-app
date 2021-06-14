import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    paddingTop: "5rem",
  },
  img: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    width: "30%",
  },
  planetName: {
    marginTop: "4rem",
    textTransform: "uppercase",
    fontSize: "5rem",
    letterSpacing: "1.2rem",
  },
  content: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  sourceLink: {
    color: "rgba(255,255,255,0.6)",
    "& span": {
      textDecoration: "underline",
    },
  },
  buttons: {
    marginTop: "3rem",
  },
});

export default useStyles;
