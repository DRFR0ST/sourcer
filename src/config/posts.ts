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
            title: "Hello World Technology",
            author_id: "000-420",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US", "pl_PL" ],
            topics: [ "technology", "offtopic" ],
            thumbnail_url: "https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1346&q=80"
        },
        {
            id: "welcome-to-jamrock",
            title: "Welcome to Jamrock",
            author_id: "100-000",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US" ],
            topics: [ "offtopic" ],
            thumbnail_url: "https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1261&q=80"
        },
        {
            id: "rudy",
            title: "Rudy Tytuł",
            author_id: "100-000",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US" ],
            topics: [ "linux" ],
            thumbnail_url: "https://images.unsplash.com/photo-1528916588970-5aa7d5c2f128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
    ] as IPostData[];