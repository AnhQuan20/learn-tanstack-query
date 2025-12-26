import { graphql } from "graphql";
import BaseApiService from "./base.api";

export type IUser = {
    userId : number,
    id : number,
    title : string,
    body : boolean
}

export type Post = {
    id: number,
    title: string,
    content: string,
    published: boolean,
    viewCount: number,
    author: IUser
}

export type Profile = {
    id: number,
    name: string,
    email: string,
    role: string,
    posts: Post[],
    profile: Profile
}


class UserApiService extends BaseApiService { 

    getAllPost = async (): Promise<Post[]> => {
        return await this.getData('/graphql');
    }

    getAllUsers = async (): Promise<IUser> => {
        return await this.getData("posts/1");
    }
}

const userApi = new UserApiService();
export default userApi;