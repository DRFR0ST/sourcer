import React from "react";
import { IPost } from "api/Post";
import { useHistory, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { Flex } from "components/shared";
import moment from "moment";
import cx from "classnames";

const useStyles = createUseStyles(styles);

const PostCard = (props: IPost & { featured?: boolean }) => {
    const history = useHistory();
    const classes = useStyles();

    const navigate = () => {
        history.push(`/p/${props.id}`);
    }

    const rootClasses = cx(classes.root, { [classes.featured]: props.featured });

    return <Flex justifyContent="space-between" className={ rootClasses }>

                <div className={ classes.imageWrapper }>
                    <img alt="thumbnail" className={ classes.image } onClick={navigate} src={props.thumbnail_url} />
                </div>


                <div style={{ minWidth: "45%" /* refactor me!!! */ }}>
                    <h2><Link className={ classes.title } to={`/p/${props.id}`}>{props.title}</Link></h2>
                    <p>{props.author?.name}</p>
                    <p>{ moment(props.created_at).fromNow() }</p>
                </div>

            </Flex>
    
}

export default PostCard;