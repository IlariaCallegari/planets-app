import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
    menu: {
        display: "flex",
        "& a": {
            textDecoration: "none !important",
            padding: "0 1.5rem 0 1.5rem",
            color: colors.white,
            "& li": {
                listStyle: "none"
            }
        },
        
    }
})

export default useStyles;