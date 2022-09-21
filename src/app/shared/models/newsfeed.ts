export interface NewsfeedStory{
    userInfo : UserInfo;
    publisherName: string;
    publishedTime: string;
    commentNumber: number;
    content: Content
}

export interface Content{
    text:string
}
export interface UserInfo{
    name: string;
    admin: boolean;
}
