import React from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { ITheme } from "../types";

const useStyles = createUseStyles((theme: ITheme) => ({
    root: {
        color: theme.palette.primary.main
    }
}));

const Post = () => {
    const { id } = useParams();
    const classes = useStyles();

    return <div className={classes.root}>Post - {id}</div>
}

export default Post;