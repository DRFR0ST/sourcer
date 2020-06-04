export interface IPostData {
    id: string;
    title: string;
    author_id: string;
    created_at: string;
    languages: string[];
    topics: string[];
}

export default
    [
        {
            id: "hello-world",
            title: "Hello World",
            author_id: "000-420",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US", "pl_PL" ],
            topics: [ "offtopic" ]
        }
    ] as IPostData[];