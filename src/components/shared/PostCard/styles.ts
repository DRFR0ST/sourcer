import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        margin: "10px 0",
        flexBasis: "45%",
        borderRadius: "12px",
        height: "150px"
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
        borderRadius: "12px 0 0 12px"
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
        height: "300px",
        backgroundColor: "rgba(0, 0, 0, 0.05)"
    }

});