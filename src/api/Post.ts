import posts from "../posts";
import { useRef, useEffect, useState } from "react";
import { IAuthor, Author } from "./Author";

export interface IPost {
    id: string;
    title: string;
    author: IAuthor | null;
    created_at: Date | null;
    languages: string[];
    topics: string[];
    thumbnail_url: string;
    content?: string;
    exists: boolean;
    fetchContent: () => Promise<string | void | undefined>;
}

export class Post implements IPost {
    id: string;
    title: string;
    author: IAuthor | null;
    created_at: Date | null;
    languages: string[];
    thumbnail_url: string;
    topics: string[];
    content: string;

    constructor(id: string) {
        const meta = posts.find(p => p.id === id);

        //if(!meta) throw new Error(`Post with id ${id} could not be found.`);

        this.id = id;
        this.title = meta?.title ?? "";
        this.author = new Author(meta?.author_id ?? "") as IAuthor;
        this.created_at = new Date(meta?.created_at ?? "");
        this.languages = meta?.languages ?? [];
        this.topics = meta?.topics ?? [];
        this.thumbnail_url = meta?.thumbnail_url || "";
        this.content = "";
    }

    get exists() {
        return !!this.title;
    }

    // TODO: Implement language detection.
    // TODO: Refactor response texts.
    fetchContent() {
        
        return new Promise<string>((resolve) => {
            let url;
    
            try {
                url = require(`../posts/${this.id}/${this.id}--en_US.md`)
            } catch(err) {
                console.error(err);
            }

            if(!url) {
                resolve("# Post not found.");
                return;
            }

            fetch(url)
                .then(async (response) => {
                    if(response.ok) {
                        const md = await response.clone().text();

                        resolve(md);
                    } else {
                        resolve("# Error while fetching post.");
                    }
                })
                .catch((err) => {
                    resolve("# Unknown error occurred.");
                    console.error(err);
                });
        })
    }
}

export const getParsedPosts = () => posts.map(post => new Post(post.id));

export const usePosts = (volume?: number) => {
    const ref = useRef(getParsedPosts());

    if(typeof volume === "number") ref.current.length = volume;
    
    return ref.current as IPost[];
}

export const usePost = (id: string) => {
    const ref = useRef<IPost>(new Post(id));

    const signal = useSignal();

    useEffect(() => {
         ref.current.fetchContent()
            .then((md: string | void | undefined) => {
                console.log(md);
                if(typeof md === "string")
                    ref.current.content = md;
                signal();
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ref.current as IPost;
}

export const useSignal = () => {
    const doSignal = useState(false)[1];

    return () => doSignal(s => !s);
}