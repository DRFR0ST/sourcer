import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        margin: "10px 0",
        flexBasis: "45%"
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
    },
    title: {
        color: "black",
        textDecoration: "none",
        fontSize: "24px",
        fontWeight: "bold",

    },
    featured: {
        width: "100%",
        flexBasis: "100%"
    }

});