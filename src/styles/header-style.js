import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    textTransform: "uppercase",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5rem 2.5rem 1.5rem 2.5rem",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
  },
  logo: {
    fontSize: "2.5rem",
    color: colors.white,
  },
});

export default useStyles;
