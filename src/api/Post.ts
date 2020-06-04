import posts from "../posts";
import authors from "./authors";
import { useRef } from "react";

export interface IPost {
    id: string;
    title: string;
    author: IAuthor;
    created_at: Date;
    languages: string[];
    topics: string[];
}

export class Post implements IPost {
    id: string;
    title: string;
    author: IAuthor;
    created_at: Date;
    languages: string[];
    topics: string[];

    constructor(id: string) {
        const meta = posts.find(p => p.id === id);

        if(!meta) throw new Error(`Post with id ${id} could not be found.`);

        this.id = id;
        this.title = meta.title;
        this.author = new Author(meta.author_id);
        this.created_at = new Date(meta.created_at);
        this.languages = meta.languages;
        this.topics = meta.topics;
    }
}

export interface IAuthor {
    name: string;
    id: string;
    posts: IPost[];
}

export class Author implements IAuthor {
    name: string;
    id: string;

    constructor(author_id: string) {
        const author = authors.find(a => a.id === author_id);

        if(!author) throw new Error(`Author with id ${author_id} cound not be found.`)

        this.name = author.name;
        this.id = author_id;
    }

    get posts() {
        return getParsedPosts().filter(p => p.author.id === this.id);
    }
}

export const getParsedPosts = () => posts.map(post => new Post(post.id));

export const usePosts = (volume?: number) => {
    const ref = useRef(getParsedPosts());

    if(typeof volume === "number") ref.current.length = volume;
    
    return ref.current as IPost[];
}