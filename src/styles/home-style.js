import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  homeContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: "5rem",
    textTransform: "uppercase",
  },
  enterBtn: {
    color: colors.white,
    margin: 0,
    display: "inline-block",
    padding: "2.5rem 3.5rem",
    textTransform: "uppercase",
    transition: "all 0.3s ease-in",
    animation: "$flicker 2s ease-in infinite",
    fontWeight: 700,
    fontSize: "1.5rem",
    "& div": {
      marginTop: "1.5rem",
      height: "3px",
      background:
        "linear-gradient(90deg, #419ebb,  #eda249 , #6f2ed6 , #d14c32 , #d83a34 , #cd5120 , #1ec2a4 , #2d68f0 )",
      opacity: 0,
      transition: "all 0.4s ease-in",
      width: 0,
    },
    "&:hover div": {
      width: "100%",

      opacity: 1,
    },
  },
  "@keyframes flicker": {
    " 0%, 18%, 22%, 25%, 53%, 57%, 100%": {
      textShadow:
        "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #1ec2a4, 0 0 82px #1ec2a4, 0 0 92px #1ec2a4, 0 0 102px #1ec2a4, 0 0 151px #1ec2a4",
    },
    " 20%, 24%, 55%": {
      textShadow: "none",
    },
  },
});

export default useStyles;
