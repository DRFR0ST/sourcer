import React from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { ITheme } from "../types";
import ReactMarkdown from "react-markdown";
import { usePost } from "../api/Post";

const useStyles = createUseStyles((theme: ITheme) => ({
    root: {
        


        // "& p": {
        //     opacity: 0.5
        // }
    },
    container: {
        maxWidth: theme.boundaries.width,
        margin: "0 auto",
        padding: "0 12px"
    },
    image: {
        width: "100%",
        height: "auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    },
    imageWrapper: {
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden"
    }
}));

const SinglePost = () => {
    const { id } = useParams();
    const classes = useStyles();
    
    const post = usePost(id);


    return <div className={classes.root}>
        <div className={classes.container}>
            <div className={classes.imageWrapper}>
                <img alt="thumbnail" src={post.thumbnail_url} className={classes.image} />
            </div>
            <ReactMarkdown source={post.content} />
        </div>
    </div>
}

export default SinglePost;