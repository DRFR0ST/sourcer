import React from "react";
import styles from "./styles";
import { createUseStyles } from "react-jss";

type TIconButtonProps = {
    name: string;
    onClick: () => void
}

// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const IconButton = ({ name, onClick }: TIconButtonProps) => {
    const classes = useStyles();
    // TODO: Add styling.
    // TODO: Implement icons.
    // TODO: Just finish the thang..
    return <button onClick={onClick} className={ classes.root }><span>{name}</span></button>
}

export default IconButton;
