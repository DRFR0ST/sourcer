import React from "react";
import styles from "./styles";
import { createUseStyles } from "react-jss";

type TIconButtonProps = {
    name: string
}

// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const IconButton = ({ name }: TIconButtonProps) => {
    const classes = useStyles();
    // TODO: Add styling.
    // TODO: Implement icons.
    // TODO: Just finish the thang..
    return <button className={ classes.root }><span>{name}</span></button>
}

export default IconButton;