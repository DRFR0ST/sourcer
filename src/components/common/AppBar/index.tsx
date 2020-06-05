import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { useHistory } from "react-router-dom";

type TAppBarProps = {

}

// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const AppBar = (props: TAppBarProps) => {
    const classes = useStyles();
    const history = useHistory();

    const navigate = (path: string) => () => {
        history.push(path);
    }

    return <div className={ classes.root }>
        <div className={ classes.container }>
            <h1 className={ classes.logo } onClick={navigate("/")}>Sourcer</h1>
        </div>
    </div>
}

export default AppBar;