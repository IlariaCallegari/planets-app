import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  dataContainer: {
    marginTop: "4rem",
    paddingBottom: "4rem",
    display: "flex",
    justifyContent: "space-between",
  },
  data: {
    width: "18.5%",
    border: "1px solid rgba(255,255,255,0.2)",
    color: colors.lightGrey,
    padding: "1rem 1.5rem",
    textTransform: "uppercase",
  },
  number: {
    fontSize: "1.7rem",
    fontWeight: 700,
    color: colors.white,
  },
});

export default useStyles;
