import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        height: "120px",
        width: "100%",
        zIndex: 999,
        position: "relative"
    },
    logo: {
        color: theme.palette.primary.main,
        cursor: "pointer",
        userSelect: "none",
        fontSize: "48px",
        fontFamily: "'Teko', sans-serif",
        margin: 0
    },
    container: {
        maxWidth: theme.boundaries.width,
        margin: "0 auto",
        padding: `0 ${theme.boundaries.padding}`   
    },
    icon: {
        margin: "0 5px"
    }
    
});