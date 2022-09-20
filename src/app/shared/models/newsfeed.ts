export interface NewsfeedStory{
    userInfo : UserInfo;
    publisherName: string;
    publishedTime: string;
    commentNumber: number;
    content: Content
}
// export interface NewsfeedStoryList {
//     storyList : NewsfeedStory[]
// }
export interface Content{
    text:string
}

export interface UserInfo{
    name: string;
    admin: boolean;
}

export class People {
    constructor(){

    }
    legs: number = 2;
}

// const newPerson = new People()
// newPerson.legs

