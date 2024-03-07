export type UserListModel = {
    users: Array<{ 
        id: string; 
        firstname: string; 
        lastname: string;
        mobile: string 
    }>;
};

export type UserListSearchModel = {
    loaderData: UserListModel;
    actionData: {
        search: string;
    }
}