import React from "react";
import { usePosts } from "../api/Post";

const Home = () => {
    const posts = usePosts();

    return <div>
        <h2>Home</h2>

        {
            // refactor to another component before extending..
            posts.map(post => 
                    <h4>{post.title} - {post.author.name}</h4>)
        }
    </div>
}

export default Home;