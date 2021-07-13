import { createUseStyles } from "react-jss";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  main: {
    width: "80%",
    margin: "0 auto",
    paddingTop: "5rem",
    [sizes.down("laptopSm")]: {
      width: "90%",
    },
    [sizes.down("mobileLg")]: {
      width: "100%"
    }
  },
  container: {
    display: "flex",
    [sizes.down("tablet")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  imgContainer: {
    width: "65%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    [sizes.down("mobileLg")]: {
      width: "200px",
    },
  },
  infoSide: {
    width: "35%",
    [sizes.down("tablet")]: {
      width: "100%",
      display: "flex",
      marginTop: "4rem",
      justifyContent: "space-between",
      alignItems: "center",
    },
    [sizes.down("mobileLg")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  info: {
    [sizes.down("tablet")]: {
      width: "45%",
    },
    [sizes.down("mobileLg")]: {
      width: "80%",
      margin: "0 auto",
      textAlign: "center"
    },
  },
  planetName: {
    marginTop: "4rem",
    textTransform: "uppercase",
    fontSize: "5rem",
    letterSpacing: "1rem",
    [sizes.down("laptopSm")]: {
      fontSize: "4rem",
    },
    [sizes.down("tablet")]: {
      marginTop: 0,
    },
    [sizes.down("mobileLg")]: {
      fontSize: "2.5rem",
    },
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
    [sizes.down("tablet")]: {
      marginTop: 0,
      width: "45%",
    },
    [sizes.down("mobileLg")]: {
      display: "none",
    },
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
});

export default useStyles;
