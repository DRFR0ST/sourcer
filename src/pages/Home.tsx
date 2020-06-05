import React from "react";
import { usePosts, IPost } from "../api/Post";

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
    if(!props.exists) return null;

    return <h4>{props.title}</h4>
}

export default Home;