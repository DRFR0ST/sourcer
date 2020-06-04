import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";

type TAppBarProps = {

}

// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const AppBar = (props: TAppBarProps) => {
    const classes = useStyles();

    return <div className={ classes.root }>
        <h1>Sourcer</h1>
    </div>
}

export default AppBar;