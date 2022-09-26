export interface UserAccount {
    userName:string;
    userEmail:string
    password: string

    name?: string;
    userRole?: string;
    age?: number;
    gender?: string;
    phone?: number;
}

export interface userLoginToken {
    userEmail: string;
    password: string;
}