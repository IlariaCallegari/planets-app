import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    mobileMenu: {
        width: "80%",
        marginBlockEnd: 0,
    },
    link: {
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: "0.8rem",
        display: "flex",
        paddingTop: "1.25rem",
        paddingBottom: "1.25rem",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)"
    },
    circle: {
        width: "20px",
        height: "20px",
        display: "inline-block",
        borderRadius: "50px",
        marginRight: "1rem"
    },
});

export default useStyles;
