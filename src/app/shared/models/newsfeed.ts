export interface NewsfeedStory{
    userInfo? : UserInfo;
    publisherName: string;
    publishedTime?: string;
    commentNumber?: number;
    content: Content
    comment: any
}

export interface Content{
    text?:string
}
export interface UserInfo{
    name?: string;
    admin?: boolean;
}

export interface Comment{
    publisherName: string;
    publishedTime: string;
    content: Content
}