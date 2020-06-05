import React from "react";
import { usePosts } from "api/Post";
import { Link, useHistory } from "react-router-dom";
import styles from "./styles";
import { createUseStyles } from "react-jss";
import { PostCard, Flex } from "components/shared";

// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const Home = () => {
    const classes = useStyles();
    const posts = usePosts();

    return <div className={ classes.root }>
        <div className={ classes.container }>
            <h2>Home</h2>

            <PostCard featured {...posts[0]} />
            <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
                {
                    // refactor to another component before extending..
                    //posts.map(post => <PostCard {...post} />)

                    posts.filter((__p, i) => i !== 0).map(post => <PostCard {...post} />)
                }
            </Flex>
        </div>
    </div>
}



export default Home;