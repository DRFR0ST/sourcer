import { ITheme } from "../../../types";

export default (theme: ITheme) => ({

    root: {

    },
    logo: {
        color: theme.palette.primary.main,
        cursor: "pointer",
        userSelect: "none"
    },
    container: {
        maxWidth: theme.boundaries.width,
        margin: "0 auto",
        padding: "0 24px"
        
    }
    
});