import BaseApiService from "./base.api";

export type IUser = {
    userId : number,
    id : number,
    title : string,
    body : boolean
}

class UserApiService extends BaseApiService { 
    getAllUsers = async (): Promise<IUser> => {
        return await this.getData("posts/1");
    }
}

const userApi = new UserApiService();
export default userApi;