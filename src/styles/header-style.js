import { createUseStyles } from "react-jss";

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
  },
});

export default useStyles;
