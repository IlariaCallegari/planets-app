import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
    menu: {
        display: "flex",
        "& a": {
            textDecoration: "none !important",
            padding: "0 1.5rem 0 1.5rem",
            color: colors.lightGrey,
            transition: "0.3s ease-in",
            "& li": {
                listStyle: "none"
            },
            "&:hover": {
                color: colors.white,
            },
        },
        
    }
})

export default useStyles;