import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        margin: "10px 0",
        flexBasis: "45%",
        borderRadius: "12px",
        position: "relative",
        "@media only screen and (max-width: 620px)": {
            flexBasis: "100%",
        }
    },  
    image: {
        position: "absolute",
        width: "100%",
        height: "auto",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    imageWrapper: {
        width: "50%",
        overflow: "hidden",
        height: "auto",
        minHeight: "180px",
        position: "relative",
        cursor: "pointer",
        borderRadius: "12px 0 0 12px",
        "@media only screen and (max-width: 620px)": {
            width: "100%",
            borderRadius: "12px 12px 0 0"
        }
    },
    title: {
        color: "black",
        textDecoration: "none",
        fontSize: "24px",
        fontWeight: "bold",
    },
    featured: {
        width: "100%",
        flexBasis: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
    contentWrapper: {
        position: "relative",
        width: "45%",
        padding: "8px 12px",
        "@media only screen and (max-width: 620px)": {
            width: "auto",
        }
    }

});