import React from "react";
import { usePosts } from "api/Post";
import styles from "./styles";
import { createUseStyles, useTheme } from "react-jss";
import { Flex, Card } from "components/shared";
import Chips from "components/shared/Chips";
import { useTopics } from "api/Topic";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useHistory } from "react-router-dom";
import { ITheme } from "types";


// Creates hook composing styles.
const useStyles = createUseStyles(styles);

const Home = () => {
    const classes = useStyles();
    const posts = usePosts();
    const topics = useTopics();
    const theme = useTheme() as ITheme;
    const history = useHistory();

    const navigate = (topic_id: string) => {
        history.push(`/t/${topic_id}`)
    }

    const chipsData = topics.map(topic => ({ label: topic.label, onClick: () => navigate(topic.id), icon: topic.icon as IconProp, color: topic.color }))

    return <div className={ classes.root }>
        <Chips data={chipsData} style={{ paddingLeft: theme.boundaries.rightOffset }} />
        <div className={ classes.container }>

            <h2>Featured</h2>

            <Flex justifyContent="center" alignItems="baseline" flexWrap="wrap" width="101%">
                {
                    // refactor to another component before extending..
                    //posts.map(post => <PostCard {...post} />)

                    posts.map(post => <Card {...post} />)
                }
            </Flex>
        </div>
    </div>
}



export default Home;