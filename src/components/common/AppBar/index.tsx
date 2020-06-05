import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { useHistory, useLocation } from "react-router-dom";
import { IconButton } from "components/shared";

type TAppBarProps = {

}

// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const AppBar = (props: TAppBarProps) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const navigate = (path: string) => () => {
        history.push(path);
    }

    return <div className={ classes.root }>
        <div className={ classes.container }>
            {location.pathname === "/" ? <h1 className={ classes.logo } onClick={navigate("/")}>Sourcer</h1> : <IconButton name="<-" />}
        </div>
    </div>
}

export default AppBar;