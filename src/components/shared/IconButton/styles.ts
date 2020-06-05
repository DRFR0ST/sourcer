import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        width: "42px",
        height: "42px",
        borderRadius: "42px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        border: "none",
        transition: "background 255ms ease",
        "&:hover": {
            background: "rgba(0, 0, 0, .2)"
        },

        "& span": {
            color: "#000",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "28px"
        }
    },

});