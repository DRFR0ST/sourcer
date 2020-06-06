import React from "react";
import styles from "./styles";
import { createUseStyles } from "react-jss";
import Ink from "react-ink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type TIconButtonProps = {
    name: IconProp;
    onClick: () => void
}

// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const IconButton = ({ name, onClick }: TIconButtonProps) => {
    const classes = useStyles();
    // TODO: Add styling.
    // TODO: Implement icons.
    // TODO: Just finish the thang..
    return  <button onClick={onClick} className={ classes.root }>
                <FontAwesomeIcon icon={name} size="lg" />
                <Ink />
            </button>
}

export default IconButton;
