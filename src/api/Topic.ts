import topics from "config/topics";

export interface ITopic {
    label: string;
    id: string;
    thumbnail_url: string;
    color: string;
    exists: boolean;
}

export class Topic implements ITopic {
    id: string;
    label: string;
    thumbnail_url: string;
    color: string;

    constructor(topic_id: string) {
        const topic = topics.find(a => a.id === topic_id);

        this.id             = topic_id;
        this.label          = topic?.label ?? "";
        this.thumbnail_url  = topic?.thumbnail_url ?? "";
        this.color          = topic?.color ?? "#000"
    } 

    get exists() {
        return !!this.label;
    }
}

export const getParsedTopics = () => topics.map(topic => new Topic(topic.id));