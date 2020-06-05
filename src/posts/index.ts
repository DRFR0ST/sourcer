export interface IPostData {
    id: string;
    title: string;
    author_id: string;
    created_at: string;
    languages: string[];
    topics: string[];
    thumbnail_url: string;
}

export default
    [
        {
            id: "hello-world",
            title: "Hello World",
            author_id: "000-420",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US", "pl_PL" ],
            topics: [ "offtopic" ],
            thumbnail_url: "https://source.unsplash.com/random/1920x1080"
        },
        {
            id: "welcome-to-jamrock",
            title: "Welcome to Jamrock",
            author_id: "100-000",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US" ],
            topics: [ "offtopic" ],
            thumbnail_url: "https://source.unsplash.com/random/1920x1080"
        },
        {
            id: "rudy",
            title: "Rudy Tytuł",
            author_id: "100-000",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US" ],
            topics: [ "offtopic" ],
            thumbnail_url: "https://source.unsplash.com/random/1920x1080"
        },
    ] as IPostData[];