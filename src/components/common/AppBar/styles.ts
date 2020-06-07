import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {
        height: "120px",
        width: "100%",
        zIndex: 950,
        position: "relative"
    },
    logo: {
        color: theme.palette.primary.toString(),
        cursor: "pointer",
        userSelect: "none",
        fontSize: "42px",
        fontFamily: "'Sarabun', sans-serif",
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