import React from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { ITheme } from "../types";
import ReactMarkdown from "react-markdown";
import { usePost, usePosts } from "../api/Post";
import { useTopics, useTopic } from "api/Topic";
import { PostCard } from "components/shared";

const useStyles = createUseStyles((theme: ITheme) => ({
    root: {
        


        // "& p": {
        //     opacity: 0.5
        // }
    },
    container: {
        maxWidth: theme.boundaries.width,
        margin: "0 auto",
        padding: `0 ${theme.boundaries.padding}`
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

const SingleTopic = () => {
    const { id } = useParams();
    const classes = useStyles();

    const topic = useTopic(id);

    return <div className={classes.root}>
        <div className={classes.container}>
            <h2>{id}</h2>
            {topic.childPosts.map(post => <PostCard {...post} />)}
        </div>
    </div>
}

export default SingleTopic;