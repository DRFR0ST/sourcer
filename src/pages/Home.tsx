import React from "react";
import { usePosts, IPost } from "../api/Post";
import { Link } from "react-router-dom";

const Home = () => {
    const posts = usePosts();

    return <div>
        <h2>Home</h2>

        {
            // refactor to another component before extending..
            posts.map(post => <PostCard {...post} />)
        }
    </div>
}

const PostCard = (props: IPost) => {

    return <Link to={`/p/${props.id}`}>{props.title}</Link>
}

export default Home;