import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    width: "80%",
    margin: "0 auto",
    paddingTop: "5rem",
  },
  container: {
    display: "flex",
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
  geologyContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  geologyImg: {
    width: "200px",
    height: "auto",
    marginTop: "-8rem",
  },
  bigGeologyImg: {
    width: "200px",
    height: "auto",
    marginTop: "-15.5rem",
  },
  "$img-appear": {
    opacity: 0
  },
  "$img-enter": {
    opacity: 0
  }
});

export default useStyles;
