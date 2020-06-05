import React from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { ITheme } from "../types";
import ReactMarkdown from "react-markdown";
import { usePost } from "../api/Post";

const useStyles = createUseStyles((theme: ITheme) => ({
    root: {
     
        "& p": {
            opacity: 0.5
        }
    }
}));

const SinglePost = () => {
    const { id } = useParams();
    const classes = useStyles();
    
    const post = usePost(id);


    return <div className={classes.root}>
        <ReactMarkdown source={post.content} />
    </div>
}

export default SinglePost;