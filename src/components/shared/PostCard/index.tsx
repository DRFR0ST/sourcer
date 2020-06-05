import React from "react";
import { IPost } from "api/Post";
import { useHistory, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { Flex } from "components/shared";
import moment from "moment";
import cx from "classnames";
import { useMediaQuery } from "@react-hook/media-query";

const useStyles = createUseStyles(styles);

const PostCard = (props: IPost & { featured?: boolean }) => {
    const history = useHistory();
    const classes = useStyles();
    
    const isMobile = useMediaQuery('only screen and (max-width: 620px)')

    const navigate = () => {
        history.push(`/p/${props.id}`);
    }

    const rootClasses = cx(classes.root, { [classes.featured]: props.featured });

    return <Flex justifyContent={isMobile ? "flex-start" : "space-between"} flexDirection={isMobile ? "column" : "row"} className={ rootClasses }>

                <div className={ classes.imageWrapper }>
                    <img alt="thumbnail" className={ classes.image } onClick={navigate} src={props.thumbnail_url} />
                </div>


                <div className={ classes.contentWrapper }>
                    <h2><Link className={ classes.title } to={`/p/${props.id}`}>{props.title}</Link></h2>
                    <p>{props.author?.name}</p>
                    <p>{ moment(props.created_at).fromNow() }</p>
                </div>

            </Flex>
    
}

export default PostCard;